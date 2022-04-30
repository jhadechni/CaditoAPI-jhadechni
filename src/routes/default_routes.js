const { Router } = require('express');
const { homeRoute, grettings, rambo } = require('../controllers/defaul_routes.controller');
const router = Router();


router.route('/')
      .get(homeRoute)

router.route('/grettings')
      .get(grettings)

router.route('/rambo')
      .get(rambo)

module.exports = router