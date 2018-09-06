let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8888,
    db = require('./db'),
    pug = require('pug');

app.use(express.static(__dirname +'/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let router = require('./routes/router')(app);

app.listen(port, () => {
  console.log("You are listening to localhost:" + port);
});
