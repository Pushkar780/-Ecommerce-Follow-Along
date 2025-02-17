const express=require("express")
const path=require("path")
const User=require("../model/user")
const { upload } = require("../multer")
const ErrorHandler = require("../utils/ErrorHandler")
const router=express.Router()


router.post("/create-user",upload.single("file"),async(requestAnimationFrame,res,next)=>
{
    const {name,email,password}=requestAnimationFrame.body
    const userEmail=await User.findOne({email})

    if(userEmail)
    {
        return next(new ErrorHandler("User already exists",400))
        
    }
const filename=req.file.filename
const fileUrl=req.join(filename)
 
    const user=
    {
        name:name,
        email:email,
        password:password,
        avatar:fileUrl
    }
    console.log(user)
})

module.exports=router