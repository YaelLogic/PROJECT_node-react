const Posts = require("../models/Posts")

//creat
const createPost = async (req, res) => {

    const { title, body } = req.body

    if (!title)
        return res.status(400).json({ massage: "Cnnot creat new post with no title" })

    const post = await Posts.create({title, body})

    if (post)
        return res.status(201).json(post)

    else
        return res.status(400).json({ massage: "Cannot creat:(" })

}

//read
const getAllPosts = async (req, res) => {
    const posts = await Posts.find().lean()
        return res.status(201).json(posts)
}

const getPostById = async (req, res) => {

    const { id } = req.params
    const post = await Posts.findById(id).lean()
    if (!post)
        return res.status(401).json({ massage: "There is no posts" })
    else
        return res.status(201).json(post)
}



//update
const updatePost = async (req, res) => {

    const {_id, title, body } = req.body

    if (!title | !body | !_id)
        return res.status(401).json({ massage: "id / title / body missing" })

    const post = await Posts.findById(_id).exec()
    if(!post)
        return res.status(400).json(({ messange: 'post is not defined' }))
    
    post.title = title
    post.body = body

    const updatePost = await post.save()
    return res.status(201).json(`'${updatePost.title}' update`)
}

//delete
const deletePost = async (req, res) => {
    const {id} = req.params
    const post = await Posts.findById(id).exec()

    if (!post)
        return res.status(401).json({ massage: "This post not exist:(" })

    await post.deleteOne()
    return res.status(201).json(post)
}

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost }


