const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/postController');
// const { protect } = require('../controllers/userController');
const { protect } = require('../middleware/auth')
router
  .route('/')
  .get(getAllPosts)
  .post(protect, createPost)

module.exports = router