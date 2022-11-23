const cakes = require("../controllers/cakes");


module.exports = function(app){

  // 1. Devuelve todas las Cakes
app.get("/cakes", (req, res) => {
    cakes.getAllCakes(req, res);
  });
  
  // 2. Devuelve una Cake por Id
  app.get("/cakes/:id", (req, res) => {
    cakes.getCakeById(req, res);
  });
  
  // 3. Agrega una Cake
  app.post("/cakes", (req, res) => {
    cakes.newCake(req, res);

  });

  
  // 4. Agrega una Rate y comentario
  app.post("/rates/:id", (req, res) => {
    cakes.newRate(req, res);

  });

  
  // // 4. Edita los datos de una Cake
  // app.put("/cakes/:id", (req, res) => {   
  //   console.log("Route editar");
  //   tasks.edit(req, res);
  // });
  
  // // 5. Elimina una Cake
  // app.delete("/cakes/:id", (req, res) => {
  //     tasks.delete(req, res)
  // });
  

}