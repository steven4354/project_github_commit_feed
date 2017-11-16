var Github = require('github');

let GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

github.authenticate({
	type: 'token',
	token: GITHUB_API_TOKEN
});

console.log(
	github.repos.getCommits({
		owner: 'fabpot',
		repo: 'symfony'
	})
);
