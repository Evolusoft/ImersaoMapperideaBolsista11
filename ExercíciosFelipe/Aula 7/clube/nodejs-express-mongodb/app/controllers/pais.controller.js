const db = require("../models");
const Pais = db.paises;
validaCamposRequeridosPais = (req) => {
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
const camposRequeridosEmpty = validaCamposRequeridos.Pais (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Pais
   const pais = new Pais ({
      sigla: req.body.sigla ? req.body.sigla : null ,
      nome: req.body.nome ? req.body.nome : null 
   });
   pais
      .save(pais)
      .then(data => {
         res.send(data);
   })
      .catch(err => { 
         res.status(500).send({
         message:
         err.message || "Ocorreu um erro de servidor ao tentar salvar Pais." 
      }); 
   }); 
};
