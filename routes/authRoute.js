const express=require("express");

const {signup,reasizeImage,uploadImage,login} =require("../services/authService");
const { route } = require("./userRoute");

const router=express.Router();

router.route("/signup").post(uploadImage,reasizeImage,signup);
router.route("/login").post(login);





module.exports=router



