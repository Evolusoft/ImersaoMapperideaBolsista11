const db = require("../models");
const Pessoa = db.pessoas;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
   // Create a Pessoa
   const pessoa = new Pessoa ({
      nome: req.body.nome ? req.body.nome : null  ,
      dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null ,
   });
};
