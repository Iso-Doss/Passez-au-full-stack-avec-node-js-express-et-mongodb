const express = require('express');

const router = express.Router();

const productController = require("../controllers/Product");

router.post('/', productController.createProduct);

router.get('/:id', productController.readProduct);

router.get('/', productController.readProducts);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;