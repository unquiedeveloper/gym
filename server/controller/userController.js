import {catchAsyncErrors} from "../middleware/catchAsyncErrors.js"
import ErrorHandler from "../middleware/error.js"

import  {User} from "../model/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async(req,res,next)=>{
   

    const {name,email,phone,password} = req.body
    if(!name || !email || !phone || !password ){
        return next(new ErrorHandler("Plz fill full form",400))
    }

    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User already exsists",400))
    }
   
    user = await User.create({
        name,
        email,
        phone,
        password,
      
    })
     
    sendToken("user registered!!", user , res, 200);


})


export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler("plz fill full details",400))
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("invalid email and password",400))
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("invalid email and password",400))
    }
    sendToken("loggedin", user , res, 200);
    





})

export const logout = catchAsyncErrors((req,res,next)=>{
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        httpOnly:true
    }).json({
        success:true,
        message:"Userlogout!!1"
    })


})



