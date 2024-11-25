var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:"Iphone 16",
      category:'Mobile',
      description:'Latest phone evaaa',
      image:'https://th.bing.com/th?id=OIP.2HnatoxLHtyjzJt9Ts_zqQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
    {
      name:"Redmi 11",
      category:'Mobile',
      description:'cascasvasvcas',
      image:'https://th.bing.com/th?id=OIP.Ndw5H3TfY7RVXduTCd4r1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
    {
      name:"Lenovo",
      category:'Mobile',
      description:'ckasjndvaonv',
      image:'https://th.bing.com/th?id=OIP.v4bPHklKgUzPOhEmIaWtzAEVEs&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
    {
      name:"Samsung",
      category:'Mobile',
      description:'asjnciuasnfciua',
      image:'https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAAAAA&w=238&h=262&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
