const db = require("../models");
const Bairro = db.bairros;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cidade) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
   // Create a Bairro
   const bairro = new Bairro ({
      nome: req.body.nome ? req.body.nome : null ,
      cepPadrao: req.body.cepPadrao ? req.body.cepPadrao : 0 , 
   });
};
