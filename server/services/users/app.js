if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = Number(process.env.PORT) || 4001;
const { mongoInit } = require('./config/mongo');
const Controller = require('./controllers/controller');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running :D',
    os: os.platform(),
  });
});

app.get('/users', Controller.findAllUser);

app.get('/users/:id', Controller.findUserById);

app.post('/users', Controller.createUser);

app.delete('/users/:id', Controller.deleteUser);

mongoInit()
  .then(() => {
    console.clear();
    app.listen(PORT, () => {
      console.log('listening on port ' + PORT);
    });
  })
  .catch((err) => {
    console.log('Failed connect to db');
    console.log(err);
  });
