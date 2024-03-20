import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
const app=express()
dotenv.config();

const PORT=process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("HOME")
})

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server running on port ${PORT}`)
})