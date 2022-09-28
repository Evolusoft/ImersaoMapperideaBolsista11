const db = require("../models");
const Tutorial = db.tutorials;
validaCamposRequeridosTutorial = (req) => {
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
exports.findAll = (req, res) => {
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

//Busca a entidade Tutorial por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Tutorial.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Tutorial with id " + id + "não encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade Tutorial."
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
const camposRequeridosEmpty = validaCamposRequeridos.Tutorial (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}

  const id = req.params.id; 

   Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Tutorial Cannot update com id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: `Tutorial com id=${id} foi atualizada com sucesso.` })
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao alterar entidade Tutorial."
       });
     });
};

//Remove a entidade Tutorial por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Tutorial.findByIdAndRemove(id)
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Tutorial Cannot delete entidade com id=${id}. Maybe Tutorial was not found!`
        });
} else {
        res.send({
       message: `Tutorial com id=${id} foi excluida com sucesso.` });
      }
    })
     .catch(err => {
       res.status(500).send({
         message:
           "Erro desconhecido aconteceu ao excluir entidade Tutorial."
       });
     });
 };

//Exclui todos os registros
exports.deleteAll = (req, res) => {
var condition = {};
   Tutorial.deleteMany({})
     .then(data => {
       res.send({
        message: `${data.deletedCount} Tutorial foram excluidas!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while deleting todos Tutorial."
       });
     });
 };

//Procura por entidade Tutorial onde campo booleano published seja true
exports.findAllPublished = (req, res) => {
   Tutorial.find({ published: true })
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
