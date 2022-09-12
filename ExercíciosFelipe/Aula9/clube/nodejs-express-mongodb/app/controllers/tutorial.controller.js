const db = require("../models");
const Tutorial = db.tutorials;
validaCamposRequeridosTutorial = (req) => {
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
return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
const camposRequeridosEmpty = validaCamposRequeridos.Tutorial (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Tutorial
   const tutorial = new Tutorial ({
      title: req.body.title ? req.body.title : null : ,
      description: req.body.description ? req.body.description : null : ,
      published: req.body.published ? req.body.published : false : 
   });
   tutorial
      .save(tutorial)
      .then(data => {
         res.send(data);
   })
      .catch(err => { 
         res.status(500).send({
         message:
         err.message || "Ocorreu um erro de servidor ao tentar salvar Tutorial." 
      }); 
   }); 
};

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
var condition = {};
   Tutorial.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Tutorial."
       });
     });
 };
