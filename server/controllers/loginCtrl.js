let loginModel = require('../models/loginMdl'),
    loginCtrl = {};

loginCtrl.get = (req, res) => {
  console.log("Hi! This is login GET!");

  res.render('login');
  res.end();
};

loginCtrl.post = (req, res) => {
  console.log("Hi! This is login POST!");
}

module.exports = loginCtrl;
