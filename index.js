const express=require("express");
const keys=require("./config/keys");
const mongoose=require("mongoose");
const cookieSession=require("cookie-session");
const passport=require("passport");
const app=express();

app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
}))
app.use(passport.initialize())
 app.use(passport.session())
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoProdURI);
require('./routes/authRoute')(app);//alternative for app.use(route)

let port=process.env.port||3000;


app.listen(port,()=>{
    console.log('Server running on port '+port);
});