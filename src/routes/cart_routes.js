const { Router } = require('express');
const router = Router();
const {getCart, addToCart,buyCart,removeFromCart} =  require('../controllers/cart_routes.controller')


router.route('/')
      .get(getCart)

router.route('/')
      .post(addToCart)

router.route('/')
      .delete(removeFromCart)

router.route('/buy')
      .post(buyCart)


module.exports = router;