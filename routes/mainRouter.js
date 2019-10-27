const express = require("express");
const mainController = require("../controllers/mainController.js");
const mainRouter = express.Router();

mainRouter.get("/records/list", mainController.index);
mainRouter.get("/records/:id", mainController.recordEdit);
mainRouter.post("/records", mainController.recordStore);
mainRouter.put('/records/:id',mainController.recordUpdate);
mainRouter.delete("/records/:id", mainController.recordDelete);

module.exports = mainRouter;