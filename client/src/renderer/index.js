/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import webConfig from '../../../webConfig.json';

const HTML = ({ content, state, helmet, seo }) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  return (
    <html lang="en" {...htmlAttrs}>
      <head dangerouslySetInnerHTML={{
        __html: `
       ${seo}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${helmet.meta.toString()}
    <link rel="shortcut icon" href="${webConfig.siteURL}/assets/graphics/logo.png">
    <link href="${webConfig.siteURL}/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="${webConfig.siteURL}/assets/css/carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="${webConfig.siteURL}/assets/css/index.css" rel="stylesheet" type="text/css" />
    <link href="${webConfig.siteURL}/assets/css/styles.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css"
      integrity="sha256-raGUlaaCI4l2GoQ6cxLH8ODuDTwuQVL9RU06sSvpD6w=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <script data-ad-client="ca-pub-3939364143951817" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    `}}
      />
      <body {...bodyAttrs}>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
        }}
        />
        <script src={`${webConfig.siteURL}/client_bundle.js`} />
      </body>
    </html>
  );
};
export default HTML;
