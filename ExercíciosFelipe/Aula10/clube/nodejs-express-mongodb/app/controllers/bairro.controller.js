const db = require("../models");
const Bairro = db.bairros;
validaCamposRequeridosBairro = (req) => {
   const CamposRequeridosEmpty = new Array();
   if (!req.body.cidade) {
      camposRequeridosEmpty.push(" cidade");
   }
   if (!req.body.nome) {
      camposRequeridosEmpty.push(" nome");
   }
   if (!req.body.cepPadrao) {
      camposRequeridosEmpty.push(" cepPadrao");
   }
   return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
   // Validate request
   if (!req.body.cidade) {
      res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
      return;
   }
   const camposRequeridosEmpty = validaCamposRequeridos.Bairro(req);
   if (camposRequeridosEmpty.length > 0) {
      res.status(400).send({ message: "campos requeridos (" + camposRequeridosEmpty.join(",") + "nao podem ser vazios" });
      return;
   }
   // Create a Bairro
   const bairro = new Bairro({
      nome: req.body.nome ? req.body.nome : null,
      cepPadrao: req.body.cepPadrao ? req.body.cepPadrao : 0
   });
   bairro
      .save(bairro)
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || "Ocorreu um erro de servidor ao tentar salvar Bairro."
         });
      });
};
