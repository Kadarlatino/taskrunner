//Routes
let homeRoute = require('./home'),
    apiRoute = require('./api');

let useRoutes = (app) => {
  app.use(homeRoute);
  app.use(apiRoute);
}

module.exports = useRoutes;
