const Todos = require("../models/Todos")

//creat
const createTodo = async (req, res) => {

    const { title, tags} = req.body

    if (!title)
        return res.status(400).json({ massage: "Cnnot creat new todo with no title" })

    const todo = await Todos.create({title, tags})

    if (todo)
        return res.status(201).json(todo)

    else
        return res.status(400).json({ massage: "Cannot creat:(" })

}

//read
const getAllTodos = async (req, res) => {
    const todos = await Todos.find().lean()

    if (!todos[0])
        return res.status(401).json({ massage: "There is no todos" })
    else
        return res.status(201).json(todos)
}

const getTodoById = async (req, res) => {

    const { id } = req.params
    const todo = await Todos.findById(id).lean()
    if (!todo)
        return res.status(401).json({ massage: "There is no todos" })
    else
        return res.status(201).json(todo)
}


//update
const updateTodo = async (req, res) => {

    const {_id, title, tags, completed } = req.body

    if (!title | !tags | !_id)
        return res.status(401).json({ massage: "id / title / taga missing" })

    const todo = await Todos.findById(_id).exec()
    if(!todo)
        return res.status(400).json(({ messange: 'todo is not defined' }))
    
    todo.title = title
    todo.tags = tags
    todo.completed = completed

    const updateTodo = await todo.save()
    return res.status(201).json(`'${updateTodo.title}' update`)
}

//delete
const deleteTodo = async (req, res) => {
    const { id } = req.params
    const todo = await Todos.findById(id).exec()

    if (!todo)
        return res.status(401).json({ massage: "This todo not exist:(" })

    await todo.deleteOne()
    return res.status(201).json(todo)
}

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo }


