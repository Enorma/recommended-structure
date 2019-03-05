const users = require("./repository");

function findOne(req,res) {
	const userid = +req.params.userid;
	const [user] = users.filter(user => user.id === userid);
	res.json(user);
}

module.exports = findOne;
