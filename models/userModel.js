const mongoose=require("mongoose");
const { type } = require("os");
const { boolean } = require("webidl-conversions");

userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    phone:{
        type:Number,
        required:[true,"phone is required"]
    },
    profileImage:String,
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"too short number of password"]
    },
    role:{
        type:String,
        enum:["user","admin","teacher"],
        default:"user",    
    },
    active:{
        type:String,
        default:true,
    }



})

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;




