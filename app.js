'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.sendFile(path.join(__dirname + '/src/assets/pages/index.html'));
    }
    else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("404 error! File not found!")
    }
});

app.use(router);
app.use('/.netlify/functions/server', router);
//app.use('/', (req, res) => res.sendFile(path.join(__dirname + '/src/assets/pages/index.html')));
app.use(express.static(__dirname + '/src/assets'));

/*app.listen(process.env.PORT || 3000, ()=>{
    console.log('SERVIDOR RODANDO!!!!')
});
*/
module.exports = app;
module.exports.handler = serverless(app);