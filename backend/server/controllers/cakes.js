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
    cake.url_img = req.body.url_img;
    cake
      .save()
      .then((newCake) => res.json(newCake))
      .catch((err) => console.log(err));
  },

  newRate: function (req, res) {

    const id = req.params.id;
    const { _rate, _comment } = req.body;
    console.log("newRate ....");
    console.log("req.params.id: " + req.params.id);
    console.log("req.body:" + req.body);
    console.log("_rate:" + _rate);
    console.log("_comment:" + _comment);

     Cake.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          rateCake: { _rate, _comment }}})
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

  // delete: function (req, res) {
  //   let id = req.params.id;
  //   Cake.deleteOne({ _id: id })
  //     .then((deletedCake) => res.json(deletedCake))
  //     .catch((err) => res.json(err));
  // },
};
