const { Router } = require('express');
const router = Router();
const {getPosts, createPost,getRecentPosts} =  require('../controllers/posts_routes.controller')


router.route('/')
      .get(getPosts)


router.route('/')
      .post(createPost)


router.route('/recent/')
      .get(getRecentPosts)


module.exports = router;