let homeModel = require('../models/homeMdl'),
    welcomeHome = {};

welcomeHome.get = (req, res) => {
  homeModel.showHomeData((data) => {
    let {Ids, homeTitle, homeText} = data;

    res.render('index', {
      id: Ids,
      title: homeTitle,
      text: homeText
    });
    res.end();
  });
};

welcomeHome.post = function (req, res) {
  let data = req.body,
      self = this;

  homeModel.saveHomeData(data, () => {
    self.get(req, res);
  });
};

welcomeHome.delete = function (req, res, path) {
  let self = this,
      id = req.params.id;

  homeModel.removeHomeData(id, () => {
    res.redirect(path);
  });
}

module.exports = welcomeHome;
