const express = require('express')
const router = express.Router()
const { getAllLists, getUserLists, getList, addList, updateList, deleteList } = require('../controllers/list.controller')

router.get('/lists', getAllLists)
router.get('/list/:userId', getUserLists)
router.get('/list/:listId', getList)
router.post('/list/add', addList)
router.put('/list/update/:listId', updateList)
router.delete('/list/delete/:listId', deleteList)

module.exports = router