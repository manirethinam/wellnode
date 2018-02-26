var http = require("http");

http.createServer((req,res)=>{
res.send="hi, Manirethinam";

}).listen(3000);

console.log("server running at port 3000");