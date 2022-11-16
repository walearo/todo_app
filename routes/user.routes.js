const express = require('express')
const router = express.Router()
const { getAllUsers, getUser, addUser, updateUser, deleteUser } = require('../controllers/user.controller')

router.get('/users', getAllUsers)
router.get('/user/:userId', getUser)
router.post('/user/add', addUser)
router.put('/user/update/:userId', updateUser)
router.delete('/user/delete/:userId', deleteUser)

module.exports = router