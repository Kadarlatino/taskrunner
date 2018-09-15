let userModel = require('../models/userMdl'),
    userData = {};

userData.get = (req, res) => {
  res.render('user');
  res.end();
}

userData.post = function(req, res) {
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    // let userFields = {
    //   email: req.body.email,
    //   username: req.body.username,
    //   password: req.body.password,
    //   passwordConf: req.body.passwordConf,
    // }

    let data = req.body,
        self = this;

    userModel.saveUserData(data, () => {
      self.get(req, res);
    });

    //use schema.create to insert data into the db
    // userModel.create(userFields, (err, user) => {
    //   if (err) {
    //     return next(err)
    //   } else {
    //     return res.redirect('/user');
    //   }
    // });
  }
}

module.exports = userData;
