import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'


import {app, server} from "./sockets/server.js"
dotenv.config();
//middleware
app.use(express.json())
app.use(cors({
   origin: ["http://localhost:5173","http://192.168.0.34:5173" ],// your React app
  credentials: true
}))
app.use(cookieParser())
const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_URI
try {
    mongoose.connect(MONGO)
    console.log("connected to MongoDB")
} catch (error) {
    console.log("error connecting mongodb")
}


app.use('/user', userRoute)
app.use('/message', messageRoute)

server.listen(PORT,'0.0.0.0', () => {
  console.log(`Example app listening on port ${PORT}`)
})
