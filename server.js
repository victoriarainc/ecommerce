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

// ==========ROUTES==============
app.get('/inventory', (req, res) => {
  Inventory.find({}, (err, items) => {
    res.send(items);
  });
});

app.post('/inventory', (req, res) => {
  let item = new Item(req.body);
  item.provider = 'local';

  item.save()
  // if good...
    .then(() => res.redirect('/'))
  // if bad...
    .catch(err => console.log(err));
});

//APP
mongoose.connect(url, (err, connection) => {
  if (!err) {
    console.log('connected to mongo');
  }
  // ============== LISTEN =================
  app.listen(3000, function() {
    console.log('Your app is running!')
  });
});
