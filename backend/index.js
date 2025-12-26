import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatroutes from "./routes/chatroutes.js";
import cors from "cors";
const app = express()
dotenv.config()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db connection")
}).catch((error)=>{
    console.log("db error connection",error)
})

//define routes
app.use("/bot/v1", chatroutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
