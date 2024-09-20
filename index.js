const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/be-demodb")

const db = mongoose.connection

db.on("error", ()=>{
    console.log("Error while connecting to MongoDB")
})

db.once("open", ()=>{
    console.log("Connected to the MongoDB")
})