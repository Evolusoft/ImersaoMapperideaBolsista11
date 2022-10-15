module.exports = mongoose => {
   var schema = mongoose.Schema(
     {
       nome: String,
       codigo: String,
       nome: String,
       ativo: Boolean
     },
     { timestamps: true }
   );
 
   schema.method("toJSON", function() {
     const { __v, _id, ...object } = this.toObject();
     object.id = _id;
     return object;
   });
 
   const Tutorial = mongoose.model("Pais", schema);
   return Tutorial;
 };