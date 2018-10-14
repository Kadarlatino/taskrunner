let userModel = require('../models/userMdl'),
    userData = {};

userData.get = (req, res) => {

  if (req.url == '/register' || req.url == '/login') {
    if (req.session && req.session.userId) {
      res.redirect('/profile');
    } else {
      if (req.url == '/register') {
        res.render('register');
      }
      if (req.url == '/login') {
        res.render('login');
      }
    }
  }

  if (req.url == '/profile') {
    if (req.session && req.session.userId) {
      res.render('profile');
    } else {
      res.redirect('/login');
    }
  }

  res.end();
}

userData.post = function(req, res) {
  if (req.url === "/register") {
    if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf) {

      let data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      }

      let self = this;

      userModel.saveUserData(data, () => {
        self.get(req, res);
      });
    }
  }

  if (req.url === "/login") {
    userModel.auth(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        console.log(req.session);

        return res.redirect('/profile');
      }
    });
  }
}

module.exports = userData;
