const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/src/assets/pages/index.html'))
});

app.use(router);
app.use(express.static(__dirname + '/src/assets'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('SERVIDOR RODANDO!!!!')
});