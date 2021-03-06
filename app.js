var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.json());

// the current simulator data
var simulatedData = {};

// returns the simulator data as the HTTP response
function returnSimulatorData(res) {
  var body = JSON.stringify(simulatedData);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
}

// update the simulator data
app.post('/update', function(req, res){
  simulatedData = req.body;
  returnSimulatorData(res);
});

// fetch the curent data
app.get('/data', function(req, res){
  returnSimulatorData(res);
});

// serve static content
app.use('/', express.static(__dirname));

app.listen(8080);