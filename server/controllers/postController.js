// const { Tour } = require('@mui/icons-material');
const Post = require('../models/postMessage');
const asyncHandler = require('express-async-handler')

exports.getAllPosts = async (req, res) => {
  try {
    const keyword = req.query.keyword ? {
      description: {
        $regex: req.query.keyword,
        $options: 'i'
      }
    } : {};
    console.log(keyword)
    const posts = await Post.find({ ...keyword });
    res.status(200).json({
      status: 'success',
      posts
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err
    });
  }
};


exports.createPost = async (req, res) => {
  try {
    console.log(req.user)
    const post = new Post({
      description: req.body.description,
      username: req.body.username,
      likeCount: 0,
      comments: []
    })

    const createdPost = await post.save()
    res.status(201).json({
      status: 'success',
      data: {
        posts: createdPost
      }
    })
  } catch (err) {
    console.log(err)
  }
}

exports.likePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  const updatedPost = await Post.findByIdAndUpdate(id, {
    likeCount: post.likeCount + 1
  }, { new: true })

  res.status(201).json({
    status: 'success',
    data: {
      posts: updatedPost
    }
  })
}
