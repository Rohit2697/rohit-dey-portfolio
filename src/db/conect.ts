import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_CONNECTION + 'portfoliodb').then((data) => console.log("db connected",data.connection.db)).catch(err => console.log("db not connected",err))
