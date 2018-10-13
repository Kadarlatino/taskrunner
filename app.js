let express = require('express'),
    passport = require('passport'),
    session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8888,
    db = require('./server/db'),
    mongoStore = require('connect-mongo')(session),
    pug = require('pug');

app.use(express.static(__dirname +'/public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/server/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



let router = require('./server/routes/router')(app);

app.listen(port, () => {
  console.log("You are listening to localhost:" + port);
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new mongoStore({
    mongooseConnection: db.connection
  })
}));
