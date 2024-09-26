let express=require('express')
let route=express.Router()
let userCntrl=require('../logic/user')
const ifAuth = require('../logic/midd/Auth')


route.post('/api/user/registration',userCntrl.Register)
route.post('/api/user/login',userCntrl.Login)
route.get('/api/user/authorized',ifAuth,userCntrl.Profile)

module.exports=route