const db = require("../models");
const Cidade = db.;
validaCamposRequeridosCidade = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.), @name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.), @name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.), @name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.), @name) }]");
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
const camposRequeridosEmpty = validaCamposRequeridos.Cidade (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Cidade
   const cidade = new Cidade ({
      codigo: req.body.codigo ? req.body.codigo : 0 : ,
      nome: req.body.nome ? req.body.nome : null : ,
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

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
var condition = {};
   Cidade.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Cidade."
       });
     });
 };
