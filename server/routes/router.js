//Routes
let homeRoute = require('./home'),
    apiRoute = require('./api'),
    four04Route = require('./404');

let useRoutes = (app) => {
  app.use(homeRoute);
  app.use(apiRoute);
  app.use(four04Route);
}

module.exports = useRoutes;
