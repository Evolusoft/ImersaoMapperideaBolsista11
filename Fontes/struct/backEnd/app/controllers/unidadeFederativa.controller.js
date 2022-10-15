const db = require("../models");
const UnidadeFederativa = db.estados;
validaCamposRequeridosUnidadeFederativa = (req) => {
const CamposRequeridosEmpty = new Array();
if (!req.body.sigla) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
if (!req.body.nome) {
camposRequeridosEmpty.push(" {[ concat(substring-after($atributoPai,'body.'),mi:if-else($level = 0, ' ', ' .'),@name) }]");
 }
return CamposRequeridosEmpty;
}

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sigla) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}
const camposRequeridosEmpty = validaCamposRequeridos.UnidadeFederativa (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}
   // Create a UnidadeFederativa
   const unidadeFederativa = new UnidadeFederativa ({
      sigla: req.body.sigla ? req.body.sigla : null ,
      nome: req.body.nome ? req.body.nome : null
   });
   unidadeFederativa
      .save(unidadeFederativa)
      .then(data => {
         res.send(data);
   })
      .catch(err => { 
         res.status(500).send({
         message:
         err.message || "Ocorreu um erro de servidor ao tentar salvar UnidadeFederativa." 
      }); 
   }); 
};

//Cria e salva um novo documento para nova entidade
exports.findAll = (req, res) => {
var condition = {};
   UnidadeFederativa.find(condition)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving UnidadeFederativa."
       });
     });
 };

//Busca a entidade UnidadeFederativa por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   UnidadeFederativa.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "UnidadeFederativa with id " + id + "não encontrada"});
else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao procurar entidade UnidadeFederativa."
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
const camposRequeridosEmpty = validaCamposRequeridos.UnidadeFederativa (req);
if (camposRequeridosEmpty.length > 0) {
res.status(400).send({message: "campos requeridos ("+camposRequeridosEmpty.join (",") + "nao podem ser vazios" });
return;
}

  const id = req.params.id; 

   UnidadeFederativa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade UnidadeFederativa Cannot update com id=${id}. Maybe UnidadeFederativa was not found!`
        });
      } else res.send({ message: `UnidadeFederativa com id=${id} foi atualizada com sucesso.` })
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Erro desconhecido aconteceu ao alterar entidade UnidadeFederativa."
       });
     });
};

//Remove a entidade UnidadeFederativa por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return;
}

  const id = req.params.id; 

   UnidadeFederativa.findByIdAndRemove(id)
     .then(data => {
 if (!data) {
           res.status(404).send({ message: ` A entidade UnidadeFederativa Cannot delete entidade com id=${id}. Maybe UnidadeFederativa was not found!`
        });
} else {
        res.send({
       message: `UnidadeFederativa com id=${id} foi excluida com sucesso.` });
      }
    })
     .catch(err => {
       res.status(500).send({
         message:
           "Erro desconhecido aconteceu ao excluir entidade UnidadeFederativa."
       });
     });
 };

//Exclui todos os registros
exports.deleteAll = (req, res) => {
var condition = {};
   UnidadeFederativa.deleteMany({})
     .then(data => {
       res.send({
        message: `${data.deletedCount} UnidadeFederativa foram excluidas!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while deleting todos UnidadeFederativa."
       });
     });
 };
