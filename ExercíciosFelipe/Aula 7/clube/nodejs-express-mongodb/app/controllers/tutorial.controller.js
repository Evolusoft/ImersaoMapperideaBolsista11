const db = require("../models");
const Tutorial = db.tutorials;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
   // Create a Tutorial
   const tutorial = new Tutorial ({
      title: req.body.title ? req.body.title : null ,
      description: req.body.description ? req.body.description : null ,
      published: req.body.published ? req.body.published : false  
   });
};
