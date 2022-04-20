const mongoose = require("mongoose")    

const schoolSchema = new mongoose.Schema({
name:{
    type:stringify,
    required:true
},
level:{
    type:stringify,
    required:true
},
category:{
    type:string,
    required:true
},
numbOfStudents:{
    type:Number,
    required:true
},
location:{
    type:string,
    required:true
},
address:{
    gps:string,
    box:string
},
contact:{
phone:string,
fax:string,
email:string
}
},{
    timestamps:true
}
)
const School =mongoose.model("Schools", schoolSchema)
module.exports= School;