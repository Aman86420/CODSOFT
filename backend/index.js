import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.rout.js";
dotenv.config({});


const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"i am cumming from backend",
        sucess:true
    })
});

//MIDDLEWARE 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions ={
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

//api s
app.use("/api/v1/user",userRoute);




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})