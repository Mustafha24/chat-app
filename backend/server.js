import express from "express"
import path from "path"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import cors from "cors"
import {server} from "./socket/socket.js"

const app=express()
app.use(express.json());

dotenv.config();
app.use(cors());

const PORT=process.env.PORT || 4000
const __dirname = path.resolve();
app.use(cookieParser())



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server running on port ${PORT}`)
})