const { Router } = require('express');
const router = Router();
const {register, login, prevLogin, getUser} = require('../controllers/users_routes.controller')

//SEARCH USER
router.route('/')
      .get(getUser)

//REGISTER
router.route('/register/')
      .post(register)

//LOGIN
router.route('/login')
      .post(login)

//PREV-LOGIN
router.route('/prev-login')
      .post(prevLogin)


module.exports = router;