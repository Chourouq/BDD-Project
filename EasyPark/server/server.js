const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { error } = require('console');

dotenv.config({path: './.env'});

const app=express();

app.use(express.urlencoded({extended: false}));
//parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

//creating the connection with my database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); 

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('MYSQL connected...')
    }
});

//Define routes
app.use('/auth', require('./routes/auth'));

app.listen(8000, ()=>{
    console.log('server is running')
});