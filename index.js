const express=require("express");
const keys=require("./config/keys");
const mongoose=require("mongoose");
const app=express();
require('./services/passport');
mongoose.connect(keys.mongoURI);
require('./routes/authRoute')(app);

let port=process.env.port||3000;


app.listen(port,()=>{
    console.log('Server running on port '+port);
});