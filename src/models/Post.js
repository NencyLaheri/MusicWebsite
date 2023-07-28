const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  shortDes: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  personName:{
    type:String,
    required:true,
  },
  personImg: {
    type: String,
    required: true,
  },
  longDesc: {
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

