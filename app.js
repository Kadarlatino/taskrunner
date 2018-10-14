let express = require('express'),
    passport = require('passport'),
    session = require('express-session'),
    redisStore = require('connect-redis')(session),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8888,
    db = require('./server/db'),
    pug = require('pug');

//use sessions for tracking logins
app.use(session({
  resave: true,
  secret: 'lorem ipsum',
  saveUninitialized: true
  // store: new redisStore({
  //   url: process.env.REDIS_STORE_URI
  // }),
  // secret: 'lorem ipsum',
  // resave: false,
  // saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(__dirname +'/public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/server/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let router = require('./server/routes/router')(app);

app.listen(port, () => {
  console.log("You are listening to localhost:" + port);
});
