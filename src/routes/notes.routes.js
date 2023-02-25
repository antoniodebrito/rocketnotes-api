const { Router } = require("express");
const notesRoutes = Router();
const NotesController = require("../controller/NotesController");

const notesController = new NotesController();

notesRoutes.post("/:users_id", notesController.create);
notesRoutes.get("/:id", notesController.show);

module.exports = notesRoutes;