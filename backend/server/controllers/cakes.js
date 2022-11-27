const { Cake, Rate } = require("../models/cake");

module.exports = {
  getAllCakes: function (req, res) {
    Cake.find()
      .then((cake) => res.json(cake))
      .catch((err) => res.json(err));
  },

  getCakeById: function (req, res) {
    Cake.findOne({ _id: req.params.id })
      .then((cake) => res.json(cake))
      .catch((err) => res.json(err));
  },

  newCake: function (req, res) {
    const cake = new Cake();
    console.log("Create ....");
    console.log(req.body);
    cake.name = req.body.name;
    cake.urlImg = req.body.urlImg;
    cake
      .save()
      .then((newCake) => res.json(newCake))
      .catch((err) => console.log(err));
  },

  newRate: async function (req, res) {

    const id = req.params.id;
    const { _rate, _comment } = req.body;
   
    const rate = new Rate();
    rate.rate = _rate;
    rate.comment= _comment;
    const rateSave = await rate.save()
     Cake.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          rateCake: rateSave}})
      .then((newCakeRate) => res.json(newCakeRate))
      .catch((err) => console.log(err));
  },

  // edit: async function (req, res) {
  //   console.log("controller edit");

  //   const id = req.params.id;
  //   const body = req.body;
  //   console.log(body);
  //   console.log(id);

  //   const data =  Cake.updateOne({ _id: id } , body )
  //     .then((cake) => res.json( { message : "success",  cake }))
  //     .catch((err) => res.json( { message : "fault",  error  : err}));
  // },

  delete: function (req, res) {
    let id = req.params.id;
    Cake.deleteOne({ _id: id })
      .then((deletedCake) => res.json(deletedCake))
      .catch((err) => res.json(err));
  },
};
