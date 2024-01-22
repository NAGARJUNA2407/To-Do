 const express = require("express");
 const app = express();

 //load config from env
 require("dotenv").config();

 const PORT=process.env.PORT || 4000;

 //middle ware to parse json request body 
    app.use(express.json());

//import routes for TODO API
const todoRoutes=require("./routes/todos")

//mount the todo api routes 
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
    console.log(`server started succesfully at ${PORT}`)
})

//Connect to database
const dbConnect=require("./config/database");
dbConnect();


//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is Default Route  HOMEPAGE </h1>`)
})