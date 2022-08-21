'use strict';
const express = require('express');
const cors= require('cors')
const { expenceCat,incomeCat, incomeTra, expenseTra } = require('./routes');
const {sequelize} = require('./models');



const app = express();
const port = process.env.PORT || 2500;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(expenceCat);
app.use(incomeCat);
app.use(incomeTra);
app.use(expenseTra);



app.listen(port, async()=>{
    console.log("Aplication started at ",port)
    // await sequelize.sync({alter:true})
    
})