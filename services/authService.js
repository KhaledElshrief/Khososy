const userModel = require("../models/userModel");
const createToken = require("../utilts/createToken");
const asyncHandler= require("express-async-handler");
const bcryp=require("bcrypt");
const apiError = require("../utilts/apiError");
const { v4: uuidv4 } = require('uuid');
const sharp =require("sharp")
const { uploadSingleImage } = require("../middeleware/uploadeImage");
const jwt =require("jsonwebtoken")



const uploadImage=uploadSingleImage("profileImage")
const reasizeImage=asyncHandler( async (req,res,next)=>{
    const fileName=`user-${uuidv4()}-${Date.now()}.jpeg`
    if(req.file){
        sharp(req.file.buffer).resize(600,600)
        .toFormat("jpeg")
        .jpeg({quality:90})
        .toFile(`uploads/user/${fileName}`)
        req.body.profileImage=fileName;
    }



    next();
 
 
 
 
 })

const signup=asyncHandler(async(req,res,next)=>{
    if(req.body.password){
        req.body.password=await bcryp.hash(req.body.password,12);
    }
    const user=await userModel.create(req.body);

    if(!user){
        return next(new apiError("there is an error on sign up ",400));
    }
    const token =createToken(user._id)
    res.status(200).json({status:"success",data:user,token:token})

})

const login=asyncHandler(async(req,res,next)=>{
    const user=await userModel.findOne({eamil:req.body.eamil})
    if(!user||!(await bcryp.compare(req.body.password,user.password))){
        return next(new apiError("email or password are not correct",400))
    }
    const token=createToken(user._id);

    res.status(200).json({status:"success",data:user,token:token})

})


const protect=asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
        token =req.headers.authorization.split(" ")[1];
       
    }
    if(!token){
        return next(new apiError("you are not logged in ",400));
    }
    const decoded=  jwt.verify(token,process.env.JWT_SECRET_KEY)
    const user =await userModel.findById(decoded.userId);
    if(!user){
        return next (new apiError("user is no longer exxist",400))
    }

    req.currentUser=user
    next();

  
})

const allowedTo=(...roles)=>{
    return asyncHandler(async(req,res,next)=>{
      
        if(!roles.includes(req.currentUser.role)){
            return next(new apiError("you are not allowed to access this route ",400))

        }
        next();
    })
}



module.exports= {signup,reasizeImage,uploadImage,login,protect,allowedTo}

