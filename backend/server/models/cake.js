const mongoose = require('mongoose')

//Generamos un esquema de objeto JSON que almacenaremos
const RateSchema = new mongoose.Schema(
    {
        rate: {type: Number},
        comment: {type: String}
    }, { timestamps: true }

);
//Generamos un esquema de objeto JSON que almacenaremos
const CakeSchema = new mongoose.Schema(
    {
    name: {type: String},
    urlImg: {type: String},
    rateCake: [RateSchema]
    }, { timestamps: true }

);
const Cake = mongoose.model('Cake', CakeSchema);
const Rate = mongoose.model('Rate', RateSchema);

module.exports = {Cake, Rate};