const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  postText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Post = model('Post', postSchema);

module.exports = Post;



