
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); 

exports.register = (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;

    db.query('SELECT email FROM client WHERE email=?', [emailAddress], async (error, results) =>{
        if(error){
            console.log(error);
        }if(results && results.length > 0){
            return res.res.json({Error: 'That email is already in use'});
        }
        try{
            hashedPassword = await bcrypt.hash(password, 8);
            const values=[
                firstName,
                lastName,
                phoneNumber,
                emailAddress,
                hashedPassword
            ];
            db.query('INSERT INTO client (firstName, lastName, phone, email, password) VALUES(?,?,?,?,?)', [values], (error, results)=>{
                if(error){
                    res.json({error: 'Inserting data error in server'});
                    console.log("error while inserting");
                }else{
                    return res.json({Status: "Success"});
                }
            });
        }catch{
            /*return*/ res.json({Error: "Error for hashing password"})
        }
    });
}; 

exports.login = (req, res)=>{
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    db.query('SELECT * FROM client WHERE email=?', [emailAddress], (err, data)=>{
        if(err){
            console.log('error in the login');
            return res.json({Error: "Login Error In Server"});
        }if(data && data.length > 0){
            if(password === data[0].password){
                return res.json({Status: "Success"});   
            }else{
                return res.json({Error: "password not muched"});
            }
        }else{
            return res.json({Error: "No Email Existed"});
        };
        
    })
};