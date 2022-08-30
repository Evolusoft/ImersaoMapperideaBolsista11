const db = require("../models");
const Pais = db.paises;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sigla) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
   // Create a Pais
   const pais = new Pais ({
      sigla: req.body.sigla ? req.body.sigla : null, 
      nome: req.body.nome ? req.body.nome : null  
   });
};
