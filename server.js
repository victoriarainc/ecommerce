// ===========PACKAGES===========
const mongoose = require('mongoose');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const Inventory = require('./models/inventory');

let url = 'mongodb://localhost:27017/ecommerce';

// =========BOILER PLATE===========
// for express
app.use(express.static('public'));

//for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ==========ROUTES==============
app.get('/inventory', (req, res) => {
  Inventory.find({}, (err, items) => {
    res.send(items);
  });
});

app.post('/inventory', (req, res) => {
  console.log(req.body);

  let item = new Inventory(req.body);

  item.save()
    .then(() => res.redirect('http://localhost:3000/inventory'))
    .catch(err => console.log(err));

  //
  // let item = new Item(req.body);
  // item.provider = 'local';
  //
  // item.save()
  // // if good...
  //   .then(() => res.redirect('/'))
  // // if bad...
  //   .catch(err => console.log(err));
});

//APP
mongoose.connect(url, (err, connection) => {
  if (!err) {
    console.log('connected to mongo');
  }
  // ============== LISTEN =================
  app.listen(3030, function() {
    console.log('Your app is running!')
  });
});
