const express    = require("express");
const userRouter = require("./users/users.routes");
const postRouter = require("./posts/posts.routes");
const router     = express.Router();

router.use("/", postRouter);
router.use("/", userRouter);


module.exports = router;