const mongoose= require("mongoose")
const validator = require("validator")
const User =mongoose.model('user',{
    name:{
        type:String,
        required:true,
        trim:true
    },
   
       age :{
        type:Number,
        default:18,
      validate(val){
        if(val <=0){
              throw new Error ('age must be positive number')
        }
      }
        
    },
       city :{
        type:String,
       
    }

})
module.exports= User