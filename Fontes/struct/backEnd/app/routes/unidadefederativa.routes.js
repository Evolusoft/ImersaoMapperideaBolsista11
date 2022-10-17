module.exports = app => {
  const unidadesFederativa = require("../controllers/unidadeFederativa.controller.js");
  var router = require("express").Router();
  router.post("/", unidadesFederativa.create);
  router.get("/", unidadesFederativa.findAll);
  router.get("/:id", unidadesFederativa.findOne);
  router.put("/:id", unidadesFederativa.update);
  router.delete("/:id", unidadesFederativa.delete);
  router.delete("/", unidadesFederativa.deleteAll);
  app.use("/api/unidadesFederativa", router);
};
