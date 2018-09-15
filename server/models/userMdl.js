let mongoose = require('mongoose'),
    userSchema = new mongoose.Schema({
      email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true
      },
      passwordConf: {
        type: String,
        required: true
      }
    }, {collection: 'users'}),
    userModel = mongoose.model('users', userSchema);

userModel.saveUserData = (data, callback) => {
  let userMod = new userModel(data);
  userMod.save().then(() => callback());
}

module.exports = userModel;
