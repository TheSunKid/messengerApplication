import express from "express";
import connectDB from "./config/connectDb";
import configViewEngine from "./config/viewEngine";
import initRoutes from './routes/web';
import bodyParser from 'body-parser';

require('dotenv').config();
//init App
let app = express();

//Connect to mongoDB
connectDB();

//Config View Engine
configViewEngine(app);

//Enable Post Data 
app.use(bodyParser.urlencoded({extended:true}));

//init all Routes;
initRoutes(app);

// Start Listen 
app.listen(process.env.APP_PORT,process.env.APP_HOST,() => {
  console.log('Hello, Running at', process.env.APP_HOST ,process.env.APP_PORT);
})

