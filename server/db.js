let mongoose = require('mongoose'),
    dbHost = 'mongodb://localhost:27017',
    dbName = 'taskrunner',
    dbUri = dbHost + '/' + dbName;

class Database {
  constructor() {
    this._connect();
    this.connection = mongoose.connection;
  }

  _connect() {
    mongoose.connect(dbUri, { useNewUrlParser: true }).then(() => {
      console.log('Connection to Mongo successful!');
    }).catch(err => {
      console.error('Database connection error');
    });
  }
}

module.exports = new Database();
