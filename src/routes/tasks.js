const router = require('express').Router()
const Task = require('../models/Task')

router.get('/gettasks', async (req, res) => {
    const tasks = await Task.find()
    
    res.send(tasks)
})

router.post('/addtask', async (req, res) => {
    const { name, body } = req.body
    const task = { name, body }

    const newTask = new Task(task)
    const newTask2 = await newTask.save()

    res.send(newTask2)
})

router.put('/taskupdate/:id', async (req, res) => {
    const { name, body } = req.body
    const task = { name, body }

    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, task)
    res.send(taskUpdated)
})

router.delete('/taskdelete/:id', async (req, res) => {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id)
    res.send(taskDeleted);
})

module.exports = router;