const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");

// return all products
router.get("/", (req, res) => {
  res.render("main");
});

// return a product by id
router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.send(Actions.getOne(id));
});

// add a new product
router.post("/products", (req, res) => {
  const {name, price, description} = req.body;
  res.send(Actions.addProduct(name, price, description));
} );

// update a product
router.put("/:id", (req, res) => {
  const {id} = req.params
  const body = req.body
  res.send(Actions.update(id, body));
});

// delete a product
router.delete("/:id", (req, res) => {
  res.send(Actions.delete(req.params.id));
})


module.exports = router;