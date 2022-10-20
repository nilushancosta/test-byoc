const express = require('express');
const app = express();
const port = 9090;

app.get('/', async (req, res) => {
  console.log("Received a request");
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
