const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('API Running');
} ); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
