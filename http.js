const { log } = require('console');
const http=require('http');
const url=require('url');

let server=http.createServer((req,res)=>{
    let parseurl=url.parse(req.url,true);
    let path=parseurl.pathname;
    let query=parseurl.query;
    console.log(parseurl);
    

    res.setHeader('Content-Type','text/html');
    if(path === '/') {
        res.end('<h1>Home page</h1>');
    }else if(path === '/about'){
        res.end('<h1>About Page');
    }else if(path==='/welcome'){
        res.end(`<h1>welcome ${query.name}</h1>`)
    }
    
    else{
        res.end('<h1>404 page not found</h1>');
    }

})

server.listen(4000,()=>{
    console.log('Server is running on port 4000');
    
})
