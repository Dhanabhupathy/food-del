import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://dhanabhupathy_db_user:gXncj5TQf24hZ3HP@cluster0.zedijvx.mongodb.net/?appName=Cluster0').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.