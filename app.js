var express = require("./express/express.js");
var fs = require('fs')

var app = express;
app.listen(3000, "localhost", () => {
  console.log('app is listening');
});

app.get("/", (req, res) => {
  res.end("get method was fired");
});



app.get("/foo/:bar", (req, res) => {
  let keys = Object.keys(req.params);
  keys.forEach(key => {
    res.write(req.params[key]);
  });
  res.end("foo bar");
});

app.post("/post/:form", (req, res) => {
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
