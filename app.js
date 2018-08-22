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

// If that page non exists
app.use((req, res) => {
  res.status(404);
  res.write('404: File Not Found');
  res.end();
});


app.listen(port, () => {
  console.log("You are listening to localhost:" + port);
});
