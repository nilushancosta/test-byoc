const request = require('request');
const https = require('https');

const express = require('express');
const app = express();
const port = 9990;

app.get('/passthrough', (req, res) => {
  console.log("Received a request");
  request('https://postman-echo.com/get', function (error, response, body) {
          res.send(body)
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
