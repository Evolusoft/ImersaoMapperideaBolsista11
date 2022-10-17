module.exports = app => {
  const cidades = require("../controllers/cidade.controller.js");
  var router = require("express").Router();
  router.post("/", cidades.create);
  router.get("/", cidades.findAll);
  router.get("/:id", cidades.findOne);
  router.put("/:id", cidades.update);
  router.delete("/:id", cidades.delete);
  router.delete("/", cidades.deleteAll);
  app.use("/api/cidades", router);
};
