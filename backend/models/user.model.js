import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
    }
},{timestamps:true})

const User = new mongoose.model("User", userSchema)

export default User;