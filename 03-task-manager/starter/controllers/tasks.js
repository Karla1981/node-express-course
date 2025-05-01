const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError } = require('../errors/custom-error')

// GET - getAllTasks
const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})    
})
// POST - createTask
const createTask = asyncWrapper( async (req, res) => {   
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})
// GET - getTask - single task
const getTask = asyncWrapper( async (req, res, next) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})

        //if there is something wrong with the id send a 404 response
        if(!task){
            return next(createCustomError(`No task with is ${taskID}`, 404))
        }
        res.status(200).json({ task })
})
// PATCH - updateTask
const updateTask = asyncWrapper( async (req, res) => {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return next(createCustomError(`No task with is ${taskID}`, 404))
        }
        res.status(200).json({task })
})
// DELETE - deleteTask
const deleteTask = asyncWrapper( async (req, res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({ _id:taskID})
        if (!task) {
            return next(createCustomError(`No task with is ${taskID}`, 404))
        }
        res.status(200).json({ task })
})
module.exports = {getAllTasks, createTask,getTask, updateTask, deleteTask}