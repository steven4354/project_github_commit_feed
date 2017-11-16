var Github = require('github');

let GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

var github = new Github({
	// optional
});

github.authenticate({
	type: 'token',
	token: 'e7fa446292645a4c5cfb5e58e238579d6187d31a'
});

//change the token after pulling

var getcommitsObj = (ownername, reponame) => {
	github.repos
		.getCommits({
			owner: ownername,
			repo: reponame
		})
		.then(result => {
			console.log('this is the result: ' + result);
			return result;
		})
		.catch(err => {
			console.log('this is the err: ' + err);
			return err;
		});
};

module.exports = getcommitsObj;
