const db = require("../models");
const Bairro = db.bairros;
validaCamposRequeridosBairro = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.cidade) {
camposRequeridosEmpty.push("cidade");
 }
if (!req.body.nome) {
camposRequeridosEmpty.push("nome");
 }
if (!req.body.cepPadrao) {
camposRequeridosEmpty.push("cepPadrao");
 }
if (!req.body.ativo) {
camposRequeridosEmpty.push("ativo");
 }
return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cepPadrao) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
const camposRequeridosEmpty = validaCamposRequeridos.Bairro (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Bairro
   const bairro = new Bairro ({
      nome: req.body.nome ? req.body.nome : null : ,
      cepPadrao: req.body.cepPadrao ? req.body.cepPadrao : 0 : ,
      ativo: req.body.ativo ? req.body.ativo : false : 
   });
   bairro
      .save(bairro)
      .then(data => {
         res.send(data);
   })
      .catch(err => { 
         res.status(500).send({
         message:
         err.message || "Ocorreu um erro de servidor ao tentar salvar Bairro." 
      }); 
   }); 
};

//Cria e salva um novo documento para nova entidade
exports.findAll = (req, res) => {
var condition = {};
   Bairro.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Bairro."
       });
     });
 };

//Busca a entidade Bairro por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Bairro.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Bairro with id " + id + "não encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade Bairro."
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
const camposRequeridosEmpty = validaCamposRequeridos.Bairro (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}

  const id = req.params.id; 

   Bairro.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Bairro Cannot update com id=${id}. Maybe Bairro was not found!`
        });
      } else res.send({ message: `Bairro com id=${id} foi atualizada com sucesso.` })
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao alterar entidade Bairro."
       });
     });
};

//Remove a entidade Bairro por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Bairro.findByIdAndRemove(id)
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Bairro Cannot delete entidade com id=${id}. Maybe Bairro was not found!`
        });
} else {
        res.send({
       message: `Bairro com id=${id} foi excluida com sucesso.` });
      }
    })
     .catch(err => {
       res.status(500).send({
         message:
           "Erro desconhecido aconteceu ao excluir entidade Bairro."
       });
     });
 };

//Exclui todos os registros
exports.deleteAll = (req, res) => {
var condition = {};
   Bairro.deleteMany({})
     .then(data => {
       res.send({
        message: `${data.deletedCount} Bairro foram excluidas!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while deleting todos Bairro."
       });
     });
 };

//Procura por entidade Bairro onde campo booleano ativo seja true
exports.findAllAtivo = (req, res) => {
   Bairro.find({ ativo: true })
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Bairro."
       });
     });
 };
