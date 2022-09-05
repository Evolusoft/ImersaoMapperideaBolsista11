const db = require("../models");
const Cidade = db.cidades;
validaCamposRequeridosCidade = (req) => {
   const CamposRequeridosEmpty = new Array();
   if (!req.body.codigo) {
      camposRequeridosEmpty.push(" codigo");
   }
   if (!req.body.nome) {
      camposRequeridosEmpty.push(" nome");
   }
   if (!req.body.uf) {
      camposRequeridosEmpty.push(" uf");
   }
   if (!req.body.bairros) {
      camposRequeridosEmpty.push(" bairros");
   }
   return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
   // Validate request
   if (!req.body.codigo) {
      res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
      return;
   }
   const camposRequeridosEmpty = validaCamposRequeridos.Cidade(req);
   if (camposRequeridosEmpty.length > 0) {
      res.status(400).send({ message: "campos requeridos (" + camposRequeridosEmpty.join(",") + "nao podem ser vazios" });
      return;
   }
   // Create a Cidade
   const cidade = new Cidade({
      codigo: req.body.codigo ? req.body.codigo : 0,
      nome: req.body.nome ? req.body.nome : null
   });
   cidade
      .save(cidade)
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || "Ocorreu um erro de servidor ao tentar salvar Cidade."
         });
      });
};
