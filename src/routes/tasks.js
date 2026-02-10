const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

let tasks = [];

// Get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Create task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }

  const task = { id: uuidv4(), title, completed: false };
  tasks.push(task);

  res.status(201).json(task);
});

// Delete task
router.delete("/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
