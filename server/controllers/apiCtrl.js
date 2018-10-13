let homeModel = require('../models/homeMdl'),
    apiCtrl = {};

apiCtrl.get = (req, res) => {
  homeModel.showHomeData((data) => {
    let {Ids, homeTitle, homeText} = data;

    res.json({
      id: Ids,
      title: homeTitle,
      text: homeText
    });

    res.end();
  });

};

apiCtrl.post = (req, res) => {
  let id = req.body.id,
      title = req.body.title,
      text = req.body.text;

  if (id) {
    homeModel.removeHomeData(id);
  } else {
    homeModel.saveHomeData({title: title, text: text});
  }
};

module.exports = apiCtrl;
