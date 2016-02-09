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

app.get('/:flavor', function(req,res) {
  var flavor = req.params.flavor;
  var i;
  if (flavor === "vanilla"){
    i=0
  }else if (flavor === "chocolate"){
    i=1
  }else if (flavor === "banana"){
    i=2
  }else if (flavor === "greentea"){
    i=3
  }else if (flavor === "jawbreakers"){
    i=4
  }
  var data = {
    name: icecreams[i].name,
    price: icecreams[i].price,
    awesomeness: icecreams[i].awesomeness
  }
  res.render('icecream', data);
});

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});