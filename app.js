let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8888,
    db = require('./server/db'),
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
