const http = require('http');
const querystring = require('querystring')

const port = process.env.PORT || 1337

responseText = (req,res)=>{
    res.end('welcome to port 1337')
}

respondJson = (req,res)=>{
    res.setHeader(
        'Context-Type' , 'application/json')
    res.end(JSON.stringify({name:'lam' , age:'20' , }))
}

responseError = (req,res)=>{
    res.writeHeader(404,'Context-Type','application/json')
    res.write('Page not found code error 404')
}

function respondEcho(req, res){
    res.setHeader('Context-Type' , 'application/json')
    const input  = querystring.parse(
        req.url
        .split('?')
        .slice(1)
        .join('')
    )
        
    //console.log("x: " + x)
    //console.log("input: "+input)
    console.log(typeof input)
    res.end(input)
}

const server = http.createServer((req,res)=>{
    //res.setHeader('Content-Type', 'application/json')
    //res.end(JSON.stringify({abc:['hi', 'hello'], cdf:[1,2,3]}))
    if (req.url === '/') responseText(req,res);
    if (req.url === '/json') return respondJson(req, res)
    if (req.url.match(/^\/echo/)) return respondEcho(req, res)
    responseError(req,res);
    //res.end();
})

server.listen(port)
console.log('Server is listening on port 1337')