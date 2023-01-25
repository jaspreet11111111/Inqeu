const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Post can not be empty']
  },
  topic: {
    type: String,
    // required: [true, 'A post must have topic']
  },
  username: {
    type: String,
    required: [true, 'A post must have authorName'],
    ref: 'User'
  },
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  comments: {
    type: [String],
    default: []
  }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post
