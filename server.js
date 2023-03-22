const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1> hlw this shakib here </h1>");
    resp.end();
}).listen(4500);