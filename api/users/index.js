const express = require("express");
const userRouter = express.Router();

const listUsers = require("./list");
const createUser = require("./create");
const findOne = require("./findone");

userRouter.get("/", listUsers);
userRouter.post("/", createUser);
userRouter.get("/:userid", findOne);

module.exports = userRouter;
