import express from "express";
import connectDB from "./config/connectDb"

import ContactSchema from "./models/contact.model"
require('dotenv').config();

let app = express();

//Connect to mongoDB
connectDB();

app.get('/testdb', async (req,res) => {
  try{
    let item = {
      userId : 'something',
      contactId : 'somethingNew',
      status:true
    }
    
    let contact = await ContactSchema.createNew(item);
    console.log(ContactSchema.createNew(item));
    res.send(contact);
  }
  catch(err){
    console.log(err);
  }
})
console.log(process.env);
app.listen(process.env.APP_PORT,process.env.APP_HOST,() => {
  console.log('Hello, Running at', process.env.APP_HOST ,process.env.APP_PORT);
})

