const { create } = require("../models/taskModels");
const Task = require("../models/taskModels");

//create task
const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(200).json({msg: error.message});
    }
};

//get all tasks
const getTasks = async(req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(200).json({msg: error.message});
    }
};

//get a task with id
const getTask = async(req,res)=>{
    try {
        const {id} = (req.params);
        const task = await Task.findById(id);
        //id not found 
        if (!task){
            return res.status(404).json('No task with id: ${id}');
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(200).json({msg: error.message});
    }

}

//delete
const deleteTask = async(req,res)=>{
    try {
        const { id } = (req.params);
        const task = await Task.findByIdAndDelete(id);
        //id not found 
        if (!task){
            return res.status(404).json('No task with id: $ {id}');
        }

        res.status(200).send("Task deleted");
    } catch (error) {
        res.status(200).json({msg: error.message});
    }
};

//update
//runValidator to make sure that rule set in taskMaster is enforced
const updateTask = async(req,res)=>{
    try {
        const { id } = (req.params);
        const task = await Task.findByIdAndUpdate({_id: id} , req.body, {new: true , runValidators: true});
        //id not found 
        if (!task){
            return res.status(404).json('No task with id: ${id}');
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(200).json({msg: error.message});
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}