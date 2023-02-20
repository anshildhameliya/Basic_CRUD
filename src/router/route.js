require("../module/module");
const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.post("/userCreate", controller.create);
route.get("/getUsers", controller.findAll);
route.get("/getUser/:id", controller.findOne);
route.put("/editUser/:id", controller.update);
route.delete("/removeUser/:id", controller.remove);

module.exports = route;