'use strict';

const app = require('./express/app');

app.listen(process.env.PORT || 3000, ()=>{
    console.log('SERVIDOR RODANDO!!!!')
});