let mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
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
      }
    }, {collection: 'users'}),
    userModel = mongoose.model('users', userSchema);

userModel.saveUserData = (data, callback) => {
  let userMod = new userModel(data);
  userMod.save().then(() => callback());
}

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

//authenticate input against database
//.statics.authenticate
userModel.auth = function (email, password, callback) {
  userModel.findOne({ email: email }).exec((err, user) => {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return callback(null, user);
          console.log('finded!');
        } else {
          console.log('not finded :(');
          //return callback();
        }
      });
    });
}


module.exports = userModel;
