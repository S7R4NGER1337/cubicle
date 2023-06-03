const express = require("express");
const router = express.Router();
const cubeManager = require("../managers/cubeManager");

router.get("/create", (req, res) => {
  console.log(cubeManager.getAll());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeManager.create({ name, description, imageUrl, difficultyLeve: Number(difficultyLevel) });

  res.redirect("/");
});

module.exports = router;
