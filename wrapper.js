require('dotenv').config()

var Github = require('github');
var env = require('dotenv').config();

let GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

var github = new Github({
	// optional
});

github.authenticate({
	type: 'token',
<<<<<<< HEAD
	token: process.env.GITHUB_API_TOKEN
=======
	token: GITHUB_API_TOKEN
>>>>>>> f20a4fca9675561ca09bc7acd533bad832de2763
});

//change the token after pulling
//steven: token in .env

var getcommitsObj = (ownername, reponame) => {
	return new Promise((resolve, reject) => {
		github.repos
			.getCommits({
				owner: ownername,
				repo: reponame
			})
			.then(result => {
				console.log('this is the result: ' + result);
				resolve(result);
			})
			.catch(err => {
				console.log('this is the err: ' + err);
				reject(err);
			});
	});
};

module.exports = getcommitsObj;
