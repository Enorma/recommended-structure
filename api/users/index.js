const express = require("express");
const userRouter = express.Router();
const listUsers = require("./list");
userRouter.get("/", listUsers);
module.exports = userRouter;
