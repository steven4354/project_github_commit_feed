var express = require('./express/express.js');
var fs = require('fs');
let data = require('./data/commits');
const url = require('url');

let dataString = JSON.stringify(data, null, 2);

console.log(dataString);

var app = express;
app.listen(3000, 'localhost', () => {
	console.log('app is listening');
});

app.get('/', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	fs.readFile('./public/index.html', function(err, content) {
		let contentString = content.toString('utf8');
		let newString = contentString.replace('{{ commit Feed }}', dataString);
		//console.log(newString);
		res.write(newString);
	});
	//res.end('get method was fired');
});

app.get('/commits', (req, res) => {
	let _url = url.parse(req.url).pathname;
	console.log('Path name: ', _url);
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	fs.readFile('./public/commits.html', function(err, content) {
		let contentString = content.toString('utf8');
		//let newString = contentString.replace('{{ commit Feed }}', dataString);
		console.log(contentString);
		res.write(contentString);
	});
});

app.get('/foo/:bar', (req, res) => {
	let keys = Object.keys(req.params);
	keys.forEach(key => {
		res.write(req.params[key]);
	});
	res.end('foo bar');
});

app.post('/post/:form', (req, res) => {
	let body = '';
	/*
  req.on('data', (data) => {
    console.log('heres the data in req.on: ' + data);
    body += data
  })
  req.on('end', () => {
    req.body = body
    console.log('req.body is ' + req.body);
    res.end('data')
  })
  => moved router.js for router.handler
  */
	//req.on(end... replaces res.end("form posted \n");
});

//to test post run in terminal curl -X POST http://localhost:3000/post/sjdflksd
//curl -d "data=example1&data2=example2" http://localhost:3000/post/sjdflksd
