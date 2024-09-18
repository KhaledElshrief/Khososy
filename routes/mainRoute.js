const userRoute =require("./userRoute.js")
const authRoute=require("./authRoute.js")


const mainRoute=(app)=>{

    app.use("/user",userRoute)
    app.use("/auth",authRoute)
    
   
}

module.exports=mainRoute;