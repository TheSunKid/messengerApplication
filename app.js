import express from "express";

let app = express();
let hostname = 'localhost';
let port  = '3000';

app.get('/hello', (req,res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(port,hostname,() => {
  console.log('Hello, Running at', hostname ,port);
})

