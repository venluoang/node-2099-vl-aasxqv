/* LUOANG, VENICE L.
       WD - 202   */

var http = require('http'); //Import Node.js core module

var server = http.createServer(function (req, res) {
  if (req.url == '/') {

    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html'});

    //set response content
    res.write ('<html><body><p>This is HOME Page.</p></body></html>');
    res.end();

  }
  else if (req.url == "/student") {

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<html><body><p>This is STUDENT Page.</p></body></html>');
    res.end();
  }
  else if (req.url == "/admin") {

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<html><body><p>This is ADMIN Page.</p></body></html>');
    res.end();
  }
  else
    res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')