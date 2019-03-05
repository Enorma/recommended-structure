const users = require("./repository");

function listUsers(req,res) {
	res.json(users);
}

module.exports = listUsers;
