var Github = require('github');

var github = new Github({
    // optional
})

github.authenticate({
	type: 'token',
	token: 'd553cea3a143ef191150caa9204a6524dca8483f'
});

//change the token after pulling

var getcommitsObj(ownername, reponame){
	github.repos.getCommits({
		owner: ownername,
		repo: reponame
	})
	.then(result => {
		console.log('this is the result: ' + result)
		return result
	})
	.catch(err => {
		console.log('this is the err: ' + err)
		return err
	})
}

module.exports = getcommitsObj
