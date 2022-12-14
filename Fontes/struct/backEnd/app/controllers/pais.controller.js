const db = require("../models");
const Pais = db.paises;
validaCamposRequeridosPais = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.sigla) {
        camposRequeridosEmpty.push("sigla");
 }
if (!req.body.codigo) {
        camposRequeridosEmpty.push("codigo");
 }
if (!req.body.nome) {
        camposRequeridosEmpty.push("nome");
 }
if (!req.body.ativo) {
        camposRequeridosEmpty.push("ativo");
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
const camposRequeridosEmpty = validaCamposRequeridos.Pais (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a Pais
   const pais = new Pais ({
      sigla: req.body.sigla ? req.body.sigla : null : ,
      codigo: req.body.codigo ? req.body.codigo : 0 : ,
      nome: req.body.nome ? req.body.nome : null : ,
      ativo: req.body.ativo ? req.body.ativo : false : 
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

//Cria e salva um novo documento para nova entidade
exports.findAll = (req, res) => {
var condition = {};
   Pais.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Pais."
       });
     });
 };

//Busca a entidade Pais por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Pais.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Pais with id " + id + "n??o encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade Pais."
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
const camposRequeridosEmpty = validaCamposRequeridos.Pais (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}

  const id = req.params.id; 

   Pais.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Pais Cannot update com id=${id}. Maybe Pais was not found!`
        });
      } else res.send({ message: `Pais com id=${id} foi atualizada com sucesso.` })
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao alterar entidade Pais."
       });
     });
};

//Remove a entidade Pais por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   Pais.findByIdAndRemove(id)
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade Pais Cannot delete entidade com id=${id}. Maybe Pais was not found!`
        });
} else {
        res.send({
       message: `Pais com id=${id} foi excluida com sucesso.` });
      }
    })
     .catch(err => {
       res.status(500).send({
         message:
           "Erro desconhecido aconteceu ao excluir entidade Pais."
       });
     });
 };

//Exclui todos os registros
exports.deleteAll = (req, res) => {
var condition = {};
   Pais.deleteMany({})
     .then(data => {
       res.send({
        message: `${data.deletedCount} Pais foram excluidas!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while deleting todos Pais."
       });
     });
 };

//Procura por entidade Pais onde campo booleano ativo seja true
exports.findAllAtivo = (req, res) => {
   Pais.find({ ativo: true })
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Pais."
       });
     });
 };
