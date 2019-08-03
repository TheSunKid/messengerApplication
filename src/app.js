import express from "express";
import connectDB from "./config/connectDb"
import configViewEngine from "./config/viewEngine"
require('dotenv').config();
//init App
let app = express();

//Connect to mongoDB
connectDB();

//Config View Engine
configViewEngine(app);


app.get('/',  (req,res) => {
  return res.render('main/master')
})

app.get('/login-register',  (req,res) => {
  return res.render('auth/loginRegister')
})


// Start Listen 
app.listen(process.env.APP_PORT,process.env.APP_HOST,() => {
  console.log('Hello, Running at', process.env.APP_HOST ,process.env.APP_PORT);
})

