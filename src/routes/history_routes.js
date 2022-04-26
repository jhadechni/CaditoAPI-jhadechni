const { Router } = require('express');
const router = Router();
const { getHistory } = require('../controllers/history_routes.controller')


router.route('/:user_id')
    .get(getHistory)

module.exports = router;