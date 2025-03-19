const express = require("express")
const router = express.Router()
const todo = require("../controllers/todosController")

router.post("/createTodo",todo.createTodo)
router.get("/getAllTodos",todo.getAllTodos)
router.get("/getTodoById/:id",todo.getTodoById)
router.put("/updateTodo",todo.updateTodo)
router.delete("/deleteTodo/:id",todo.deleteTodo)

module.exports = router

