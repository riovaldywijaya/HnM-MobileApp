if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

console.clear();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
