let homeModel = require('../models/homeMdl'),
    apiCtrl = {};

apiCtrl.get = (req, res) => {
  console.log('hellooooo!');
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

module.exports = apiCtrl;
