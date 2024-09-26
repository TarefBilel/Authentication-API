let express=require('express')
let app=express()
let jwt=require('jsonwebtoken')
let bcrypt=require('bcrypt')
let handler=require('express-async-handler')
const user = require('../db/user')
const ifAuth = require('./midd/Auth')


let userCntrl={
Register:handler(async(req,res)=>{
    let {username,email,password}=req.body
    let genpass=await bcrypt.genSalt(10)
    let hashPassword=await bcrypt.hash(password,genpass)
    let insertDb=await user.create({
    username,
    email,
    password:hashPassword
    })
    
    console.log(req.body);
    
    }),
Login:handler(async(req,res)=>{
     let {email,password}=req.body
     let fEmail= await user.findOne({email})
     let fPass= await bcrypt.compare(password,fEmail.password)
     if(!fPass){
        throw new Error("Failed")
     }
        
     
     
     let token=jwt.sign({id:fEmail._id},"bilel",{expiresIn:"30d"})
     
     res.json({
        token,
        id:fEmail._id,
        email:fEmail.email,
        password:fEmail.password
     })

}),

Profile:handler(async(req,res)=>{
let fUser=await user.findById("66b13ed3447aabdecf1dd31b")
res.json({fUser})
})
    

}
module.exports=userCntrl