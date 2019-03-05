const users = [
	{
		name: "joel"
	},
	{
		name: "kike"
	},
	{
		name: "gordolfo gelatino"
	}
]

function listUsers(req,res) {
	res.json(users);
}

module.exports = listUsers;
