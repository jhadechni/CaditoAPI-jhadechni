const { Router } = require('express');
const router = Router();
const { postAReview, getReviews } = require('../controllers/reviews_routes.controller')


router.route('/')
    .post(postAReview)

router.route('/')
    .get(getReviews)


module.exports = router;