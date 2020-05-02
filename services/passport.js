const passport=require("passport");
const googleStrat=require("passport-google-oauth20").Strategy;
const keys=require("../config/keys")
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
