module.exports = mongoose => {
      var Schema = mongoose.Schema(
            {
        cidade: {
            codigo: Numero,
            nome: Texto,
            uf: UnidadeFederativa,
        },
            cidade: Cidade,
            nome: String ,
            cepPadrao: Number 
            },
            { timestamps: true }
        );
    
    const Bairro = mongoose.model("bairro", schema);
    return Bairro;
};
