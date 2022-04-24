const { Router } = require('express');
const router = Router();
const {getPosts, createPost,getRecentPosts} =  require('../controllers/posts_routes.controller')

//SEARCH USER
router.route('/')
      .get(getPosts)


router.route('/')
      .post(createPost)
      
//REGISTER
router.route('/recent/')
      .get(getRecentPosts)


module.exports = router;