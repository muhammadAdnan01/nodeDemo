const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('api Called');
});

app.listen(port);

console.log('app is listening at port', port);
