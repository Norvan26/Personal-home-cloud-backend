const express = require("express");
const { tasks } = require('./tasks.js');


const serverPort = 3000;

const server = express();

server.use(express.json());

server.get("/tasks", (req, res) => {
  res.json(tasks);
});

server.post("/tasks", (req, res) => {
  const newTask = req.body;
  
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.json({message: "Tasks added", item: newTask});

})

server.listen(serverPort, () => {
  console.log("Server is running on port " + serverPort);
});