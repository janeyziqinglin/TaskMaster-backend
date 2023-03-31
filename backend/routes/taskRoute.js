const express = require("express");
const { createTask, getTasks,getTask,deleteTask,updateTask} = require("../controllers/taskController");
const Task = require("../models/taskModels");
const router = express.Router()

//potential optimization
// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

//from server.js already add api/tasks
router.post("/",createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.patch("/api/tasks/:id", updateTask);

module.exports = router;