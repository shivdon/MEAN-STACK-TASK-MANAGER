const Task = require("../models/task");
const User = require("../models/user");

exports.create = async (req, res) => {
  try {
    const { title, userId } = req.body;
    res.json(await new Task({ title, status: false, user: userId }).save());
  } catch (err) {
    res.status(400).send("Task Create failed");
  }
};

exports.list = async (req, res) =>
  res.json(
    await Task.find({ user: req.params.userId }).sort({ createdAt: -1 }).exec()
  );

exports.update = async (req, res) => {
  const { title } = req.body;
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { title },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Task update failed");
  }
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Task update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Task delete failed");
  }
};
