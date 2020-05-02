const passport=require("passport");
module.exports=(app)=>{
app.get('/',(req,res)=>{
    res.send("WELCOME!!")
})

app.get('/auth/google/callback',passport.authenticate('google',{
    scope:['profile','email']
}
)
);
//app.get('/auth/google/callback',passport.authenticate('google'));
};