const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// module.exports = mongoose.model("Post", postSchema);

let Post;

try {
  // Try to fetch the model if it's already compiled
  Post = mongoose.model('Post');
} catch (error) {
  // If the model doesn't exist, compile it
  Post = mongoose.model('Post', postSchema);
}

module.exports = Post;

