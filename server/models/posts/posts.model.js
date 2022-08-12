const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const postsSchema = require("./posts.mongo");
const userSchema  = require("../users/users.mongo")

const getAllPosts = async(data) => {
    return await postsSchema.find({});
};

const getAllPostbyUser = async(data) => {
    console.log(ObjectId("62ee5e22781a77f1e1854d3d"))
    return await userSchema.aggregate([
        {
            // $match: {
            //     _id: ObjectId("62ee5e22781a77f1e1854d3d")
            // },
            $match: {
                _id: ObjectId("62ee5e22781a77f1e1854d3d")
            },
           
        },
        {
            $lookup: {
                from: "posts",
                localField: "_id",
                foreignField: "host_id",
                as: "posts_data"
            }
        }
    ]);
}

const addNewPost = async(data) => {
    return await postsSchema.create(data);
}

module.exports = {
    getAllPosts,
    getAllPostbyUser,
    addNewPost,
};


//https://www.loginradius.com/blog/engineering/hashing-user-passwords-using-bcryptjs/#:~:text=Hashing%20is%20a%20one%2Dway,original%20text%20from%20a%20hash.

//https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/