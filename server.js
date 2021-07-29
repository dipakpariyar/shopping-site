import 'babel-polyfill';
import 'isomorphic-unfetch';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import cors from 'cors';
import run from 'app-node';
import Compression from 'compression';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import webConfig from './webConfig.json';
import { init as dbinit } from './server/src/db';
import AppComponent from './client/src/App';
import HTML from './client/src/renderer';
import store from './client/src/store';
import authExpress from './server/src/express';
import schema from './server/src/graphql/schema';
import resolvers from './server/src/graphql/resolvers';
import SeoDataProvider from './server/src/seo/index';
// import createSitemap from './site-map/sitemapGenerator';

// createSitemap();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(Compression());

app.use(
  cors({
    origin: `${webConfig.siteURL}`,
    credentials: true,
  })
);

// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', express.static('build/public'));

run(async () => {
  await dbinit();

  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }));

  app.get(['*/:param', '*'], (req, res) => {
    const urlParam = req.params.param ? req.params.param : null;
    const client = new ApolloClient({
      ssrMode: true,
      // Remember that this is the interface the SSR server will use to connect to the
      // API server, so we need to ensure it isn't firewalled, etc
      link: createHttpLink({
        uri: `${webConfig.siteURL}/graphql`,
        credentials: 'same-origin',
        headers: {
          cookie: req.header('Cookie'),
        },
      }),
      cache: new InMemoryCache(),
    });

    const context = {
      urlParam,
    };

    // The client-side App will instead use <BrowserRouter>
    const App = (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <AppComponent />
          </StaticRouter>
        </Provider>
      </ApolloProvider>
    );

    // Handle queries etc.. before sending raw html
    getDataFromTree(App).then( async () => {
      const content = ReactDOM.renderToString(App);
      const helmet = Helmet.renderStatic();
      const SEO = await SeoDataProvider(req.params);
      // console.log('final seo tag', SEO);
      const initialState = client.extract();
      // console.log('React helmet', helmet);
      const html = <HTML content={content} state={initialState} helmet={helmet} seo={SEO} />;
      res.status(200);
      res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
      res.end();
    });
  });

  authExpress(app);
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});
