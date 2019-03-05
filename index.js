const express = require("express");
const api = require("./api")
const app = express();
const port = 3000;

app.use(express.json());

app.all("/", (req,res) => {
	console.log("http://" + req.hostname + req.path);
	res.json({name: "raíz de kike", version: "1.0"});
	res.end();
});

app.use("/api", api);

app.listen(port, () => {
	console.log("JÁLESE PUTOOOOO");
});
