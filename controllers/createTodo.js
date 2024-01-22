// import the model
const Todo = require("../models/Todo");

//define router handler

exports.createTodo= async(req,res)=>{
    try{
        //extract from request body 
        const {title,description}=req.body;
        //create a new Todo Obj and insert in DB
        const response=await Todo.create({title,description});
        //send json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Sucessfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
    }
}
