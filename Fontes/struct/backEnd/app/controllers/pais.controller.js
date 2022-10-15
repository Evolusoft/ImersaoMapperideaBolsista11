const db = require("../models");
const Pais = db.paises;

//Cria e salva um novo documento para nova entidade
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sigla) {
        res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
        return; }
    if (!req.body.nome) {
          res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
          return;
}

   // Create a Pais
   const pais = new Pais ({
      sigla: req.body.sigla ? req.body.sigla : null,
      nome: req.body.nome ? req.body.nome : null  
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
  const sigla = req.query.sigla;  
  const nome = req.query.nome; 
var condition = sigla ? { sigla: { $regex: new RegExp(sigla), $options: "i" } } : {};
var condition = nome ? { sigla: { $regex: new RegExp(nome), $options: "i" } } : {};

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
const id = req.params.id; 

   Pais.findById(id)
     .then(data => {
       if (!data)
   res.status(404).send({ message: "Pais with id " + id + "não encontrada"});
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
    if (!req.body) {
      return res.status(400).send({ 
        message: "Conteudo nao pode ser vazio!" 
      });        
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
           "Erro desconhecido aconteceu ao alterar entidade Pais."
       });
     });
};

//Remove a entidade Pais por id
exports.delete = (req, res) => {
  const id = req.params.id; 

   Pais.findByIdAndRemove(id, { useFindAndModify: false })
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
