const {createUser,uploadImage,reasizeImage} = require("../services/userServices");


const express =require("express");
const router=express.Router();

router.route("/").post(uploadImage,reasizeImage,createUser);






module.exports =router;
