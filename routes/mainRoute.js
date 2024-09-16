const userRoute =require("./userRoute.js")


const mainRoute=(app)=>{

    app.use("/user",userRoute)
   
}

module.exports=mainRoute;