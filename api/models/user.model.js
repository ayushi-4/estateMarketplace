import { timeStamp } from "console";
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        
    },
    avatar:{
        type:String,
        default:"https://i0.wp.com/eacademy.edu.vn/wp-content/uploads/2023/photos1/1/WhatsApp-DP-Cute-151.jpg?resize=1080%2C1350&ssl=1"
    },
} ,
 {timeStamps : true
 });
 const User = mongoose.model('User' , userSchema);
 
 export default User;