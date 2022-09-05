const db = require("../models");
const Pessoa = db.pessoas;
validaCamposRequeridosPessoa = (req) => {
   const CamposRequeridosEmpty = new Array();
   if (!req.body.documento) {
      camposRequeridosEmpty.push(" documento");
   } else {
      if (!req.body.numero) {
         camposRequeridosEmpty.push(" numero");
      }
      if (!req.body.tipo) {
         camposRequeridosEmpty.push(" tipo");
      }
   }
   if (!req.body.nome) {
      camposRequeridosEmpty.push(" nome");
   }
   if (!req.body.endereco) {
      camposRequeridosEmpty.push(" endereco");
   } else {
      if (!req.body.uf) {
         camposRequeridosEmpty.push(" uf");
      }
      if (!req.body.cidade) {
         camposRequeridosEmpty.push(" cidade");
      }
      if (!req.body.bairro) {
         camposRequeridosEmpty.push(" bairro");
      }
      if (!req.body.logradouro) {
         camposRequeridosEmpty.push(" logradouro");
      }
      if (!req.body.numero) {
         camposRequeridosEmpty.push(" numero");
      }
      if (!req.body.complemento) {
         camposRequeridosEmpty.push(" complemento");
      }
      if (!req.body.pontoReferencia) {
         camposRequeridosEmpty.push(" pontoReferencia");
      } else {
         if (!req.body.tipo) {
            camposRequeridosEmpty.push(" tipo");
         }
         if (!req.body.numero) {
            camposRequeridosEmpty.push(" numero");
         }
      }
   }
   if (!req.body.dataNascimento) {
      camposRequeridosEmpty.push(" dataNascimento");
   }
   if (!req.body.familia) {
      camposRequeridosEmpty.push(" familia");
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
   const camposRequeridosEmpty = validaCamposRequeridos.Pessoa(req);
   if (camposRequeridosEmpty.length > 0) {
      res.status(400).send({ message: "campos requeridos (" + camposRequeridosEmpty.join(",") + "nao podem ser vazios" });
      return;
   }
   // Create a Pessoa
   const pessoa = new Pessoa({
      nome: req.body.nome ? req.body.nome : null,
      dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null,
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
