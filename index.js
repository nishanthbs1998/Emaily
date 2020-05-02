const express=require("express");
const passport=require("passport");
const googleStrat=require("passport-google-oauth20").Strategy;
const keys=require("./config/keys")
const app=express();
passport.use(new googleStrat(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken,refreshToken,profile,email)=>{
    console.log('accessToken',accessToken);
    console.log('refreshToken',refreshToken);
    console.log('profile',profile);
    console.log('email',email);
}
)
);
let port=process.env.port||3000;
app.get('/',(req,res)=>{
    res.send("WELCOME!!")
})

app.get('/auth/google/callback',passport.authenticate('google',{
    scope:['profile','email']
}
)
);

//app.get('/auth/google/callback',passport.authenticate('google'));
app.listen(port,()=>{
    console.log('Server running on port '+port);
});