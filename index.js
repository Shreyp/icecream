var express = require('express');
var handlebar = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8000;

app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ 
  {name: 'vanilla', price: 10, awesomeness: 3}, 
  {name: 'chocolate', price: 4, awesomeness: 8}, 
  {name: 'banana', price: 1, awesomeness: 1}, 
  {name: 'greentea', price: 5, awesomeness: 7}, 
  {name: 'jawbreakers', price: 6, awesomeness: 2}, 
];

app.get('/vanilla', function(req,res) {
  var data = {
    name: icecreams[0].name,
    price: icecreams[0].price,
    awesomeness: icecreams[0].awesomeness
  }
  res.render('icecream', data);
});

app.get('/chocolate', function(req,res) {
  var data = {
    name: icecreams[1].name,
    price: icecreams[1].price,
    awesomeness: icecreams[1].awesomeness
  }
  res.render('icecream', data);
});

app.get('/banana', function(req,res) {
  var data = {
    name: icecreams[2].name,
    price: icecreams[2].price,
    awesomeness: icecreams[2].awesomeness
  }
  res.render('icecream', data);
});

app.get('/greentea', function(req,res) {
  var data = {
    name: icecreams[3].name,
    price: icecreams[3].price,
    awesomeness: icecreams[3].awesomeness
  }
  res.render('icecream', data);
});

app.get('/jawbreakers', function(req,res) {
  var data = {
    name: icecreams[4].name,
    price: icecreams[4].price,
    awesomeness: icecreams[4].awesomeness
  }
  res.render('icecream', data);
});

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});