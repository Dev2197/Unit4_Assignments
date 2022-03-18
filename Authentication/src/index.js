const express = require("express");

const userController = require("./controllers/user.controller");
const postController = require("./controllers/posts.controller");
const {register,login} = require("./controllers/auth.controller")

const app = express();

app.use(express.json());

app.use("/users",userController)

app.use("/posts",postController);

app.post("/register",register);
app.post("/login",login);

module.exports = app;