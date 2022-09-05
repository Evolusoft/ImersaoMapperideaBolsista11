const db = require("../models");
const UnidadeFederativa = db.estados;
validaCamposRequeridosUnidadeFederativa = (req) => {
   const CamposRequeridosEmpty = new Array();
   if (!req.body.sigla) {
      camposRequeridosEmpty.push(" sigla");
   }
   if (!req.body.nome) {
      camposRequeridosEmpty.push(" nome");
   }
   return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
   // Validate request
   if (!req.body.sigla) {
      res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
      return;
   }
   const camposRequeridosEmpty = validaCamposRequeridos.UnidadeFederativa(req);
   if (camposRequeridosEmpty.length > 0) {
      res.status(400).send({ message: "campos requeridos (" + camposRequeridosEmpty.join(",") + "nao podem ser vazios" });
      return;
   }
   // Create a UnidadeFederativa
   const unidadeFederativa = new UnidadeFederativa({
      sigla: req.body.sigla ? req.body.sigla : null,
      nome: req.body.nome ? req.body.nome : null
   });
   unidadeFederativa
      .save(unidadeFederativa)
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || "Ocorreu um erro de servidor ao tentar salvar UnidadeFederativa."
         });
      });
};
