module.exports = app => {
  const bairros = require("../controllers/bairro.controller.js");
  var router = require("express").Router();
  router.post("/", bairros.create);
  router.get("/", bairros.findAll);
  router.get("/:id", bairros.findOne);
  router.put("/:id", bairros.update);
  router.delete("/:id", bairros.delete);
  router.delete("/", bairros.deleteAll);
  app.use("/api/bairros", router);
};
