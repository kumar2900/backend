
// index.js
require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/test' , (req, res)=> {
  res.send('new Server have been launched')
})
app.get('/youtube' , (req , res) => {
  res.send('into the youtube')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
