const express = require('express');
const app = express();
require('dotenv/config');

app.get('/',(req,res) => {
    res.send('hello api');
})


app.listen(3000,() => {
    console.log("server is running on 3000");
})