const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: String, required: true },
  // user:
  //   {
  //     type: Schema.Types.ObjectId, 
  //     ref: "User"
  //   }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
