const express=require("express");
const passport=require("passport");
const googleStrat=require("passport-google-oauth20").Strategy;
const app=express();
passport.use(googleStrat());
let port=process.env.port||3000;
app.get('/',(req,res)=>{
    res.send("WELCOME!!")
})
app.listen(port);