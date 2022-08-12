const ratingSchema = require("./ratings.mongo");

const getRatingsForAPost = async(data) => {
    return await ratingSchema.find({});
};

const addNewRating = async(data) => {
    return await ratingSchema.create(data);
}

module.exports = {
    getRatingsForAPost,
    addNewRating,
};