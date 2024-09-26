let jwt=require('jsonwebtoken')

let ifAuth=(req,res,next)=>{
let getH=req.headers
let head=getH.authorization.split(" ")[1]

let verify=jwt.verify(head,"bilel",(err,decoded)=>{
    console.log(decoded);
    
})
if(verify){
req.user=verify.id
}
else{
    throw new Error("failed")
}
next()
}
module.exports=ifAuth

