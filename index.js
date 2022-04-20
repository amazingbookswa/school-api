const express = require("express")
require("dotenv").config();
const morgan =require("morgan")
const connectDB=require("./config/connectDB")
const userRoutes = require("./routes/userRoutes")



const app = express();

connectDB();

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRoutes)

//home route
app.get("/", (req, res)=>{
    res.send("<h1>WELCOME TO OUR SCHOOL API</h1>")
})

const PORT = process.env.PORT||6007


app.listen(PORT, ()=>{
    console.log("server running")
})