import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import postsRoutes from "./routes/posts.js"


const app = express()

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.use("/posts", postsRoutes)

const CONNECTION_URL = "mongodb://127.0.0.1/memories-db"
const PORT = 5000

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT, ()=>console.log(`Server running at ${PORT}`)))
.catch(e=>console.log(e))

