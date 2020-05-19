const passport=require("passport");
const googleStrat=require("passport-google-oauth20").Strategy;
const keys=require("../config/keys");
const mongoose=require("mongoose");
const User=mongoose.model('users');

passport.serializeUser((user,done)=>{done(null,user.id)});

passport.deserializeUser(async (id,done)=>{let user=await User.findById(id);
done(null,user);
})

passport.use(new googleStrat(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
},
async (accessToken,refreshToken,profile,done)=>{
    let isExistingUser=await User.findOne({googleId:profile.Id});
    if(isExistingUser){
        done(null,isExistingUser);

    }else{
      let newUser= await new User({googleId:profile.id}).save();
        done(null,newUser);
    }

    
    // console.log('accessToken',accessToken);
    // console.log('refreshToken',refreshToken);
    // console.log('profile',profile);
    // console.log('email',email);
}
)
);
