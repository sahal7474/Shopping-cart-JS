var express = require('express');
var router = express.Router();
let productHelpers = require('../helpers/product-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then(products=>{
    res.render('user/user', { products,admin:false });
  }).catch(err=>{
    console.log(err)
  })
});

module.exports = router;
