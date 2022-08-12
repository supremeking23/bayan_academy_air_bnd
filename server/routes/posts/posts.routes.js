const express = require("express");
const { addPost, getAllPost, getPostsbyUser } = require("../../controllers/Posts.controller");

const postRouter = express.Router();


postRouter.get("/", getAllPost);
postRouter.get("/get-post-by-user/:user_id", getPostsbyUser);
postRouter.post("/add-post", addPost);


module.exports = postRouter;