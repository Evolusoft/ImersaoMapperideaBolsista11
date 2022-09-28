const db = require("../models");
const Cidade = db.;
validaCamposRequeridosCidade = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
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
exports.findAll = (req, res) => {
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

//Busca a entidade Cidade por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Cidade.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Cidade with id " + id + "não encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade Cidade."
       });
     });
 };

//Altera uma entidade
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
const camposRequeridosEmpty = validaCamposRequeridos.Cidade (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}

  const id = req.params.id; 

   Cidade.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Cidade Cannot update com id=${id}. Maybe Cidade was not found!`
        });
      } else res.send({ message: `Cidade com id=${id} foi atualizada com sucesso.` })
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao alterar entidade Cidade."
       });
     });
};

//Remove a entidade Cidade por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Cidade.findByIdAndRemove(id)
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Cidade Cannot delete entidade com id=${id}. Maybe Cidade was not found!`
        });
} else {
        res.send({
       message: `Cidade com id=${id} foi excluida com sucesso.` });
      }
    })
     .catch(err => {
       res.status(500).send({
         message:
           "Erro desconhecido aconteceu ao excluir entidade Cidade."
       });
     });
 };

//Exclui todos os registros
exports.deleteAll = (req, res) => {
var condition = {};
   Cidade.deleteMany({})
     .then(data => {
       res.send({
        message: `${data.deletedCount} Cidade foram excluidas!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while deleting todos Cidade."
       });
     });
 };
