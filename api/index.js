import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
const app= express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
        console.log(err);
}); 
app.listen(4000,()=>{
    console.log("server is running on port 4000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter)
app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    });
});
