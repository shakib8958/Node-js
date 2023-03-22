const http= require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'contant-type':'application\json'});
    resp.write({name:'Anil'})

}).listen(6000);