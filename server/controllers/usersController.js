const Users = require("../models/Users")

//creat
const createUser = async (req, res) => {

    const { name, username, email, adress, phone } = req.body

    if (!name | !username | !email)
        return res.status(400).json({ massage: "Cnnot creat new user with no name / username / email" })

    const userExist = await Users.findOne({ username })
    if (userExist)
        return res.status(400).json({ massage: "This user exist" })

    const user = await Users.create({name, username, email, adress, phone})

    if (user)
        return res.status(201).json(user)

    else
        return res.status(400).json({ massage: "Cannot creat:(" })

}

//read
const getAllUsers = async (req, res) => {
    const users = await Users.find().lean()
        return res.status(201).json(users)
}

const getUserById = async (req, res) => {

    const { id } = req.params
    const user = await Users.findById(id).lean()
    if (!user)
        return res.status(401).json({ massage: "There is no users" })
    return res.json(user)
}
 

//update
const updateUser = async (req, res) => {

    const { name, username, email, adress, phone } = req.body

    const user = await Users.findOne({ username }).exec()

    if (!user)
        return res.status(401).json({ massage: "This user not exist:(" })

    if (!email | !adress | !phone)
        return res.status(401).json({ massage: "email / adress / phone missing" })

    user.email = email
    user.addres = adress
    user.phone = phone

    const updateUser = await user.save()
    return res.status(201).json(`'${updateUser.name}' update`)
}

//delete
const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).exec()

    if(!user)
        return res.status(401).json({ massage: "This user not exist:(" })

    await user.deleteOne()
    return res.status(201).json(user)
}

module.exports = {createUser, getAllUsers, getUserById, updateUser,deleteUser}


