const asyncHandler= require("express-async-handler");
const userModel = require("../models/userModel");
const { uploadSingleImage } = require("../middeleware/uploadeImage");
const { v4: uuidv4 } = require('uuid');
const sharp =require("sharp")
const bcrypt=require("bcrypt");
const apiError = require("../utilts/apiError");




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
 

 
const createUser=asyncHandler(async(req,res,next)=>{
    if(req.body.password){
        req.body.password=await bcrypt.hash(req.body.password,12)
    }
    const user=await userModel.create(req.body)
    if(!user){
       return next(new apiError("there is problem on creating user",400))
    }
    
    res.status(200).json({
        status:"success",
        data:user,
    })
    
   
})



module.exports={createUser,uploadImage,reasizeImage}




