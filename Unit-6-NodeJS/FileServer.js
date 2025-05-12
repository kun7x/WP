var http = require('http');
var fs = require('fs');
var mylog=require('./log.js');
http.createServer(function (req, res) {
	
	
  //Open a file on the server and return its content:
 
  fs.readFile('app.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   mylog.info("File Reading Started");
    res.write(data);
	
    return res.end();
  });
	
  
}).listen(8080);
