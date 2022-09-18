const postController = require('../app/controller/postController')
const router = require('express').Router();
router.get('/all', postController.all)
router.get('/single/:id', postController.single)
router.post('/add', postController.add)
router.delete('/delete/:id', postController.delete)
router.patch('/edit/:id', postController.edit)

module.exports = router