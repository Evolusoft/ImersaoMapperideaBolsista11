module.exports = app => {
  const pessoas = require("../controllers/pessoa.controller.js");
  var router = require("express").Router();
  router.post("/", pessoas.create);
  router.get("/", pessoas.findAll);
  router.get("/:id", pessoas.findOne);
  router.put("/:id", pessoas.update);
  router.delete("/:id", pessoas.delete);
  router.delete("/", pessoas.deleteAll);
  app.use("/api/pessoas", router);
};
