module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      codigo: Number,
      nome: String,
      issPadrao: Schema.Types.Decimal128,
      uf: UnidadeFederativa,
      bairros: Bairro,
    },
      { timestamps: true}
    );
  schema.method("toJSON", function(){
    const {_v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  const Cidade = mongoose.model("cidade", schema);
  return Cidade;
};
