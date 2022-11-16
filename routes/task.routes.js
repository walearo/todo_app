const express = require('express')
const router = express.Router()
const { getAllTasks, getListTasks, getUserTasks, getTask, addTask, updateTask, deleteTask } = require('../controllers/task.controller')

router.get('/tasks', getAllTasks)
router.get('/tasks/:listId', getListTasks)
router.get('/tasks/:userId', getUserTasks)
router.get('/task/:taskId', getTask)
router.post('/task/add', addTask)
router.put('/task/update/:taskId', updateTask)
router.delete('/task/delete/:taskId', deleteTask)

module.exports = router