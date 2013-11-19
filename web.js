var express = require('express'),
    http = require('http'),
    wine = require('./routes/wines');

var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;


app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(port, function() {
  console.log("Listening on " + port);
});
