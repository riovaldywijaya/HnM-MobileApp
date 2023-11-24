const express = require('express');
const Controller = require('../controllers');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running :D',
    os: os.platform(),
  });
});
// router.post('/login', Controller.userLogin);

router.get('/pub/products', Controller.getAllProduct);
router.get('/pub/products/:id', Controller.getDetailProduct);

// router.use(authentication);
router.get('/products', Controller.getAllProduct);
router.get('/products/:id', Controller.getDetailProduct);
router.post('/products', Controller.createProduct);
router.delete('/products/:id', Controller.deleteProduct);
router.patch('/products/:id', Controller.updateProduct);
router.get('/categories', Controller.getAllCategory);
router.get('/categories/:id', Controller.getDetailCategory);
router.post('/categories', Controller.createCategory);
router.delete('/categories/:id', Controller.deleteCategory);
router.put('/categories/:id', Controller.updateCategory);
// router.post('/users', Controller.createAdmin);

module.exports = router;
