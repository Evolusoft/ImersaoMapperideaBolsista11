const db = require("../models");
const Pessoa = db.pessoas;
validaCamposRequeridosPessoa = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
} else {
if (!req.body.documento.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.documento.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
}
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
} else {
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
} else {
if (!req.body.endereco.pontoReferencia.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.endereco.pontoReferencia.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
}
}
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
const camposRequeridosEmpty = validaCamposRequeridos.Pessoa (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Pessoa
   const pessoa = new Pessoa ({
      nome: req.body.nome ? req.body.nome : null ,
      dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null ,
   });
   pessoa
      .save(pessoa)
      .then(data => {
         res.send(data);
   })
      .catch(err => { 
         res.status(500).send({
         message:
         err.message || "Ocorreu um erro de servidor ao tentar salvar Pessoa." 
      }); 
   }); 
};

//Cria e salva um novo documento para nova entidade
exports.findAll = (req, res) => {
var condition = {};
   Pessoa.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Pessoa."
       });
     });
 };

//Busca a entidade Pessoa por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Pessoa.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Pessoa with id " + id + "não encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade Pessoa."
       });
     });
 };
