let mongoose = require('mongoose'),
    homeSchema = new mongoose.Schema({
      title: String,
      text: String
    }, {collection: 'homeTasks'}),
    homeModel = mongoose.model('home', homeSchema),
    homeData = mongoose.model('home');

homeModel.showHomeData = (callback) => {
  homeData.find({}, (err, home) => {
    if (err) {
      console.error('sorry, its error :( ');
    } else {

      if( home.length > 0 ) {
        let homeTitleArr=[], homeTextArr=[], Ids=[],
            intCount = home.length;

        if (intCount > 0) {
          for (let i = 0; i < intCount; i++) {
            Ids.push(home[i]._id);
            homeTitleArr.push(home[i].title);
            homeTextArr.push(home[i].text);
          }
          callback({Ids: Ids, homeTitle: homeTitleArr, homeText: homeTextArr} );
        }

      } else callback({Ids: [0], homeTitle: ['Ooops!'], homeText: ['Seems all empty :(']});
    }
  });
}

homeModel.saveHomeData = (data, callback) => {
  let homeMod = new homeModel(data);
  homeMod.save().then(() => callback());
}

homeModel.removeHomeData = (id, callback) => {
  homeData.remove({'_id': id}).then(() => callback()).catch((err) => console.error(err));
}

module.exports = homeModel;
