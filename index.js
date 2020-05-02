const express=require("express");

const app=express();

require('./routes/authRoute')(app);
let port=process.env.port||3000;


app.listen(port,()=>{
    console.log('Server running on port '+port);
});