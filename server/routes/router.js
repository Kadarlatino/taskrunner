//Routes
let routez = {};

routez.homeRoute = require('./home');
routez.userRoute = require('./user');
routez.apiRoute = require('./api');
routez.four04Route = require('./404');

let useRoutes = (app) => {
  for(let key in routez) {
    app.use(routez[key]);
  }
}

module.exports = useRoutes;
