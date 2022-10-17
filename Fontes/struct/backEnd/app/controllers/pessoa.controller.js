const db = require("../models");
const Pessoa = db.pessoas;
validaCamposRequeridosPessoa = (req) => {
  const CamposRequeridosEmpty = new Array();
  if (!req.body.documento) {
    camposRequeridosEmpty.push("documento");
  } else {
    if (!req.body.documento.numero) {
      camposRequeridosEmpty.push("documentonumero");
    }
    if (!req.body.documento.tipo) {
      camposRequeridosEmpty.push("documentotipo");
    }
    if (!req.body.nome) {
      camposRequeridosEmpty.push("nome");
    }
    if (!req.body.endereco) {
      camposRequeridosEmpty.push("endereco");
    } else {
      if (!req.body.endereco.uf) {
        camposRequeridosEmpty.push("enderecouf");
      }
      if (!req.body.endereco.cidade) {
        camposRequeridosEmpty.push("enderecocidade");
      }
      if (!req.body.endereco.bairro) {
        camposRequeridosEmpty.push("enderecobairro");
      }
      if (!req.body.endereco.logradouro) {
        camposRequeridosEmpty.push("enderecologradouro");
      }
      if (!req.body.endereco.numero) {
        camposRequeridosEmpty.push("endereconumero");
      }
      if (!req.body.endereco.complemento) {
        camposRequeridosEmpty.push("enderecocomplemento");
      }
      if (!req.body.endereco.pontoReferencia) {
        camposRequeridosEmpty.push("enderecopontoReferencia");
      } else {
        if (!req.body.endereco.pontoReferencia.tipo) {
          camposRequeridosEmpty.push("endereco.pontoReferenciatipo");
        }
        if (!req.body.endereco.pontoReferencia.numero) {
          camposRequeridosEmpty.push("endereco.pontoReferencianumero");
        }
        if (!req.body.ativo) {
          camposRequeridosEmpty.push("ativo");
        }
        if (!req.body.dataNascimento) {
          camposRequeridosEmpty.push("dataNascimento");
        }
        if (!req.body.familia) {
          camposRequeridosEmpty.push("familia");
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
          ativo: req.body.ativo ? req.body.ativo : false,
          dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null
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
              res.status(404).send({ message: "Pessoa with id " + id + "não encontrada" });
            else res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Erro desconhecido aconteceu ao procurar entidade Pessoa."
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
        const camposRequeridosEmpty = validaCamposRequeridos.Pessoa(req);
        if (camposRequeridosEmpty.length > 0) {
          res.status(400).send({ message: "campos requeridos (" + camposRequeridosEmpty.join(",") + "nao podem ser vazios" });
          return;
        }

        const id = req.params.id;

        Pessoa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: ` A entidade Pessoa Cannot update com id=${id}. Maybe Pessoa was not found!`
              });
            } else res.send({ message: `Pessoa com id=${id} foi atualizada com sucesso.` })
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Erro desconhecido aconteceu ao alterar entidade Pessoa."
            });
          });
      };

      //Remove a entidade Pessoa por id
      exports.delete = (req, res) => {
        // Validate request
        if (!req.body.id) {
          res.status(400).send({ message: "Conteudo nao pode ser vazio!" });
          return;
        }

        const id = req.params.id;

        Pessoa.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: ` A entidade Pessoa Cannot delete entidade com id=${id}. Maybe Pessoa was not found!`
              });
            } else {
              res.send({
                message: `Pessoa com id=${id} foi excluida com sucesso.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message:
                "Erro desconhecido aconteceu ao excluir entidade Pessoa."
            });
          });
      };

      //Exclui todos os registros
      exports.deleteAll = (req, res) => {
        var condition = {};
        Pessoa.deleteMany({})
          .then(data => {
            res.send({
              message: `${data.deletedCount} Pessoa foram excluidas!`
            });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while deleting todos Pessoa."
            });
          });
      };

      //Procura por entidade Pessoa onde campo booleano ativo seja true
      exports.findAllAtivo = (req, res) => {
        Pessoa.find({ ativo: true })
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
    }
  }
}

