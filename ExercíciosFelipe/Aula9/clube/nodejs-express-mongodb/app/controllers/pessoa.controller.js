const db = require("../models");
const Pessoa = db.pessoas;
validaCamposRequeridosPessoa = (req) => {
   const CamposRequeridosEmpty = new Array();
   if (!req.body.documento) {
      camposRequeridosEmpty.push(" documento");
   } else {
      if (!req.body.documento.numero) {
         camposRequeridosEmpty.push(" numero");
      }
      if (!req.body.documento.tipo) {
         camposRequeridosEmpty.push(" tipo");
      }
   }
   if (!req.body.nome) {
      camposRequeridosEmpty.push(" nome");
   }
   if (!req.body.endereco) {
      camposRequeridosEmpty.push(" endereco");
   } else {
      if (!req.body.endereco.uf) {
         camposRequeridosEmpty.push(" uf");
      }
      if (!req.body.endereco.cidade) {
         camposRequeridosEmpty.push(" cidade");
      }
      if (!req.body.endereco.bairro) {
         camposRequeridosEmpty.push(" bairro");
      }
      if (!req.body.endereco.numero) {
         camposRequeridosEmpty.push(" logradouro");
      }
      if (!req.body.endereco.numero) {
         camposRequeridosEmpty.push(" numero");
      }
      if (!req.body.endereco.complemento) {
         camposRequeridosEmpty.push(" complemento");
      }
      if (!req.body.endereco.pontoReferencia) {
         camposRequeridosEmpty.push(" pontoReferencia");
      } else {
         if (!req.body.endereco.pontoReferencia.tipo) {
            camposRequeridosEmpty.push(" tipo");
         }
         if (!req.body.endereco.pontoReferencia.numero) {
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
