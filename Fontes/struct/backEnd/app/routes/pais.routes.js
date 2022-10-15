module.exports = app => {
  const paises = require("../controllers/pais.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", paises.create);

  // Retrieve all Tutorials
  router.get("/", paises.findAll);

  // Retrieve all published Tutorials
  router.get("/published", paises.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", paises.findOne);

  // Update a Tutorial with id
  router.put("/:id", paises.update);

  // Delete a Tutorial with id
  router.delete("/:id", paises.delete);

  // Create a new Tutorial
  router.delete("/", paises.deleteAll);

  app.use("/api/paises", router);
};