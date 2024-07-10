require('dotenv').config();
const express = require('express');
const app = express();

// Other imports and setup

// Example routes or other middleware setup
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
