const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');
const products = [];
router.get('/add-product', (req, res, next) => {
  console.log('inside add-product');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
exports.routes = router;
exports.products = products;
