const usersSchema = require("./users.mongo");

const getAllUser = async() => {
    return await usersSchema.find({});
};

const addNewUser = async(data) => {
    return await usersSchema.create(data);
}

module.exports = {
    getAllUser,
    addNewUser,
};