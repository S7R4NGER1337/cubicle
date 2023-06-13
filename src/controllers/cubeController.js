const express = require("express");
const router = express.Router();
const cubeManager = require("../managers/cubeManager");
const accessoryManager = require('../managers/accessoryManager')

router.get("/create", (req, res) => {
  console.log(cubeManager.getAll());
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLeve: Number(difficultyLevel),
  });

  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", { cube });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager.getAll().lean()

  res.render("accessory/attach", { cube, accessories });
});

module.exports = router;
