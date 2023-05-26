const express = require("express")
const server = express()
const morgan = require("morgan")

const router = require("./routes/index")

server.use(express.json())
server.use(morgan("dev"))



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});


server.use('/rickandmorty', router );


server.listen(3001,() => console.log('Server raised in port: 3001' ))




















// const http = require("http")
// const {getCharById} = require("./controllers/getCharById")


// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if(req.url.includes("/rickandmorty/character")){
//         getCharById(res, Number(req.url.split("/").at(-1)))
//     }

// }).listen(3001,"localhost")