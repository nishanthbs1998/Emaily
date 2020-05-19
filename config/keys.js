if(process.env.NODE_ENV==='production'){
    module.exports=require("./prod");
}else{
    module.exports=require("./dev");//for local operation i.e dev
}