import mongoose from "mongoose";

export function connectDB(){
    try{
        mongoose.connect(process.env.MONGODB_URI || "");
        console.log('Connected to DB');
    }
    catch(err){
        console.error("Error connecting to DB");
        console.error(err);
    }
}