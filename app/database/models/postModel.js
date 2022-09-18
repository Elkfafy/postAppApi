const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title: {
        type: String, 
        trim: true,
        minLength: 1,
        maxLength: 100,
        required: true,
    },
    postType: {
        type: String,
        trim: true, 
        num: ['txt', 'file']
    },
    content: {
        type: String,
        trim: true,
        maxLength: 1000,
        required: function() {return this.postType === 'txt'}
    },
    file: {
        type: String,
        required: function() {return this.postType != 'txt'}
    }
})

const postModel = mongoose.model('posts', postSchema)
module.exports = postModel