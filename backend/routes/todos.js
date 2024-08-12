const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST a new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: false,
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// PUT update a todo
router.put("/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTodo);
});

// DELETE a todo
router.delete("/:id", async (req, res) => {
  const removedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.json(removedTodo);
});

module.exports = router;
