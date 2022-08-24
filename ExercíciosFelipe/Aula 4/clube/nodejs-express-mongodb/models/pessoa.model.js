module.exports = mongoose => {
      var Schema = mongoose.Schema(
            {
            nome: String ,
        endereco: {
            logradouro: Texto,
            numero: Texto,
            uf: UnidadeFederativa,
            cidade: Cidade,
            bairro: Bairro
        },
            endereco: Endereco,
            dataNascimento: Date ,
        familia: {
            pessoa: Pessoa,
            tipo: TipoMembroFamilia,
            membro: Pessoa
        },
            familia: MembroFamilia
            },
            { timestamps: true }
        );
    );
    const Pessoa = mongoose.model("pessoa", schema);
    return Pessoa;
};
