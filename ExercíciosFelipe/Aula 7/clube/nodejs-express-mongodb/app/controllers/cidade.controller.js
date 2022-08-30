const db = require("../models");
const Cidade = db.cidades;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.codigo) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
   // Create a Cidade
   const cidade = new Cidade ({
      codigo: req.body.codigo ? req.body.codigo : 0  ,
      nome: req.body.nome ? req.body.nome : null  ,
   });
};
