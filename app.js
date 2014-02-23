var express = require('express'),
    app = express(),
    path = require('path');

var data = {};

app.use(express.json());

function returnData(res) {
  var body = JSON.stringify(data);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
}

app.post('/accelerometer', function(req, res){
  console.log(req.body);
  data.accelerometer = req.body.accelerometer;
  returnData(res);
});

app.post('/location', function(req, res){
  console.log(req.body);
  data.locations = req.body.locations;
  returnData(res);
});

app.get('/data', function(req, res){
  returnData(res);
});

app.use('/', express.static(__dirname));

app.listen(8080);