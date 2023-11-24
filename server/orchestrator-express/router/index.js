const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller');
const errorHandler = require('../middlewares/errorHandler');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);
router.post('/products', Controller.createProduct);
router.put('/products/:id', Controller.updateProduct);
router.delete('/products/:id', Controller.deleteProduct);
router.get('/users', Controller.getUsers);
router.get('/users/:id', Controller.getUserById);
router.post('/users', Controller.createUser);
router.delete('/users/:id', Controller.deleteUser);

router.use(errorHandler);

module.exports = router;
