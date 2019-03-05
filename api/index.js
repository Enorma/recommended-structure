const express = require("express");
const apiRouter = express.Router();
const userRouter = require("./users");

apiRouter.all("/", (req,res) => {
	console.log("http://" + req.hostname + req.path);
	res.json({name: "api de kike", version: "1.0"});
	res.end();
});

apiRouter.use("/users", userRouter);
module.exports = apiRouter;
