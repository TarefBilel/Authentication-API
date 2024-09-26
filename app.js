let express=require('express')
let mongoose=require('mongoose');
let route  = require('./routes/user');
let app=express()
let port=6000;

let connectDb=async()=>{
    try {
       let connect=await mongoose.connect('mongodb+srv://Bile:bB-0676689900@bile.mrztzh7.mongodb.net/Authentication-API') 
       console.log(`mongoose is connected`);
       
    } catch (error) {
        console.log(error);
        
    }
}
connectDb()
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})

app.use(express.json())
app.use('/',route)