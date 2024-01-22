//import Model 
const Todo = require("../models/Todo")
 
//define route handler
 
exports.getTodo=async (req,res)=>{
    try{
        //Fetch all todo items from database
        const todos=await Todo.find({});
    
        //Response 
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo is fetched "
        })         
    }
    catch(err){
        console.error(err);
        res.status(500).json({
        success:false,
        error:err.message,
        message:"Server Error "
       })
    }
}

 exports.getTodoById=async (req,res)=>{
    try{
        //Extract todo items on basis on  id
        const id =req.params.id;
        const todo=await Todo.findById({_id:id});

        //if data id is not found 
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with the given id "
            })
        }
        //found 
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully fetched`
        })
    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
 }