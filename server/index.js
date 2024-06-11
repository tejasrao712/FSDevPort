// index.js
const express = require('express');
const controller = require('./control/msgctrl');

const app = express();

// Use controller middleware
app.use('/msg', controller);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
