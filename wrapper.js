var Github = require('github');

let GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

var github = new Github({
	// optional
});

github.authenticate({
	type: 'token',
	token: '505434708df0084a22beaf880682213f126e0c66'
});

//change the token after pulling
//steven: 505434708df0084a22beaf880682213f126e0c66

var getcommitsObj = (ownername, reponame) => {
	return new Promise((resolve, reject) => {
		github.repos
			.getCommits({
				owner: ownername,
				repo: reponame
			})
			.then(result => {
				//console.log('this is the result: ' + result);
				resolve(result);
			})
			.catch(err => {
				//console.log('this is the err: ' + err);
				reject(err);
			});
	})
};

module.exports = getcommitsObj;
