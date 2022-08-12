const {getAllUser, addNewUser} = require("../models/users/users.model");


const getAllUsers = async(req, res) => {
    let response_data = {status: false, data:{} , error: null};
    console.log(req.session.login_user)
    try {
        response_data.status = true;
        response_data.data   = await getAllUser();

        return res.json(response_data);
    } catch (error) {
        
    }

    
};

const landingPage = async(req, res) => {
    res.render("../views/users/index");
}

/** GET */
const signUp = async(req, res) => {
    let is_signup = true;
    res.render("../../client/views/users/signup_signin", {is_signup});
}

/** GET */
const signIn = async(req, res) => {
    let is_signup = false;
    res.render("../../client/views/users/signup_signin", {is_signup});
}

/** POST */
const addUser = async(req, res) => {
    let response_data = {status: false, data: {}, error: null};
    let {firstname, lastname, email, password} = req.body;
    
    let user = {
        firstname,
        lastname,
        email, 
        password,
        
    };

    let created_user = await addNewUser(user);
    
    response_data.data = created_user;
    response_data.redirect_url = "/";
    req.session.login_user = created_user;

    // users.push(user);

    // req.session.login_user = user;

    // console.log(users);

    // res.redirect("/");

    res.json(response_data);
}

/** POST */
const signInProcess = async(req, res) => {
    // let {username, password} = req.body;

    // let found_user = users.find((user) =>{
    //     return user.username === username && user.password === password;
    // });

    // req.session.login_user = found_user;

    res.redirect("/");
}


module.exports = {
    landingPage,
    signUp,
    signIn,
    addUser,
    signInProcess,
    getAllUsers
};