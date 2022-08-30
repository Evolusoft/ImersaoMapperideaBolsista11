module.exports = mongoose => {
      var Schema = mongoose.Schema(
            {
            nome: String 
            },
            { timestamps: true }
        );

    const TipoMembroFamilia = mongoose.model("tipoMembroFamilia", schema);
    return TipoMembroFamilia;
};
