const express = require('express')
const router = express.Router();

//import controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo}=require("../controllers/getTodo")
const {getTodoById}=require("../controllers/getTodo")
const {updateTodo}=require("../controllers/updateTodo")
const{deleteTodo}=require("../controllers/deleteTodo")

//define api router for post
router.post("/createTodo",createTodo);
 

//define api router for get
router.get("/getTodos",getTodo)

//define api router for get by id 
router.get("/getTodos/:id",getTodoById)

//PUT update wala
router.put("/updateTodo/:id",updateTodo)

//delete
router.delete("/deleteTodo/:id",deleteTodo)

module.exports=router