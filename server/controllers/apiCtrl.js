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
  let self = this,
      id = req.body.id;

  homeModel.removeHomeData(id, () => console.log("del!"));
};

module.exports = apiCtrl;
