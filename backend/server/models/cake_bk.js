const mongoose = require("mongoose");

// Creacion del esquema
const RateSchema = new mongoose.Schema(
  {
  rate: { 
    type: Number, require: [true, "rate required"] },
  comment: {
    type: String,
    require: [true, "comment required"],
    maxlength: 300,
  },
});

const CakeSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "noame required"], maxlength: 100 },
    url_img: {
      type: String,
      require: [true, "image required"],
      maxlength: 400,
    },
    rateCake: [RateSchema],
  },
  { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Cake = mongoose.model("Cake", CakeSchema);
const Rate = mongoose.model("Rate", RateSchema);

module.exports = { Cake, Rate };
