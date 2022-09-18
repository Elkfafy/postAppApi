const postModel = require('../database/models/postModel');
const { sendMessage } = require('../handler/handler');
class PostController {
    static add = async (req, res) => {
        try {
            const post = postModel(req.body);
            await post.save()
            res.status(200).send(sendMessage(true, post, 'post has been added'))
        } catch(e) {
            res.status(500).send(sendMessage(false, e, e.message))
        }
    }
    static delete = async (req, res) => {
        try {
            const data = await postModel.findByIdAndDelete(req.params.id)
            if (!data) throw new Error('There isnot any user to delete')
            res.status(200).send(sendMessage(true, data, 'post has been deleted'))
        } catch(e) {
            res.status(500).send(sendMessage(false, e, e.message))
        }
    }
    static edit = async (req, res) => {
        try {
            const data = await postModel.findByIdAndUpdate(req.params.id, req.body)
            if (!data) throw new Error('There isnot any user to update')
            res.status(200).send(sendMessage(true, data, 'post has been updated'))
            
        } catch(e) {
            res.status(500).send(sendMessage(false, e, e.message));
        }
    }
    static all = async (req, res) => {
        try {
            const posts = await postModel.find()
            res.status(200).send(sendMessage(true, posts, 'all posts has been found'))
        } catch(e) {
            res.status(500).send(sendMessage(false, e, e.message));
        }
    }
    static single = async (req, res) => {
        try {
            const post = await postModel.findById(req.params.id)
            if (!post) throw new Error("The post hasn't been found");
            res.status(200).send(sendMessage(true, post, 'The post has been found'))
        } catch(e) {
            res.status(500).send(sendMessage(false, e, e.message))
        }
    }
}

module.exports = PostController