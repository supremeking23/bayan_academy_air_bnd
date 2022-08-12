const express = require("express");
const { UpdateSingleUser, signUp, signIn, addUser, signInProcess,getAllUsers } = require("../../controllers/Users.controller");

const userRouter = express.Router();

userRouter.get("/all-user", getAllUsers);
userRouter.get("/signup", signUp);
userRouter.get("/signin", signIn);
userRouter.post("/add-user", addUser);
userRouter.post("/sign-in-process", signInProcess);

module.exports = userRouter;