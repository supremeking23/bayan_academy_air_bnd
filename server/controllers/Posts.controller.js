const {getAllPosts, getAllPostbyUser, addNewPost} = require("../models/posts/posts.model");


const getAllPost = async(req, res) => {
    let response_data = {status: false, data:{} , error: null};

    try {
        response_data.status = true;
        response_data.data   = await getAllPosts();

        // return res.json(response_data);
        res.render("posts/dashboard");
    } catch (error) {
        
    }
};

const getPostsbyUser = async(req, res) => {
    let response_data = {status: false, data:{} , error: null};

    try {
        response_data.status = true;
        response_data.data   = await getAllPostbyUser();

        return res.json(response_data);
    } catch (error) {
        
    }
}


// /** GET */
// const signUp = async(req, res) => {
//     let is_signup = true;
//     res.render("../../client/views/users/signup_signin", {is_signup});
// }

// /** GET */
// const signIn = async(req, res) => {
//     let is_signup = false;
//     res.render("../../client/views/users/signup_signin", {is_signup});
// }

/** POST */
const addPost = async(req, res) => {
    let response_data = {status: false, data: {}, error: null};
    let {title, sub_title, location_name, post_description} = req.body;
    
    let post = {
        host_id: "62ee5e22781a77f1e1854d3d",
        title,
        sub_title,
        location:{
            location_name,
            latitude: 6.8888,
            longitude: 8.67667,
        }, 
        post_description,
    };

    let created_post = await addNewPost(post);
    
    response_data.data = created_post;
    response_data.redirect_url = "/";
   

    res.json(response_data);
}



module.exports = {
    getAllPost,
    getPostsbyUser,
    addPost,
};