const { Router } = require("express");
const notesRoutes = Router();
const NotesController = require("../controller/NotesController");

const notesController = new NotesController();

notesRoutes.post("/:users_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;