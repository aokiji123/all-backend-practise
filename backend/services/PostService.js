import Post from "../Post.js";
import FileService from "../services/FileService.js"

let post;
let posts;
let createdPost;
let updatedPost;

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    createdPost = await Post.create({...post, picture: fileName});
    return createdPost;
  }

  async getAll() {
    posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error('There is no ID')
    }
    post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('There is no ID')
    }
    updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('There is no ID')
    }
    post = await Post.findByIdAndDelete(id);
    return post;
  }
}


export default new PostService();
