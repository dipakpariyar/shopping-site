// import login from './request-handler/login';
// import logout from './request-handler/logout';

export default function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // app.post('/auth/login', login);
  // app.post('/auth/logout', logout);
}
