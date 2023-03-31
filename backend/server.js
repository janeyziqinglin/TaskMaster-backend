const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/taskModels");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({  
  origin: "https://task-master-ojj3.onrender.com"
})); //cors need to be on before routes

app.use("/api/tasks",taskRoutes);


// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});


// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
