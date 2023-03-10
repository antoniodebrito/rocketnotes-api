const { Router } = require("express");
const notesRoutes = Router();
const NotesController = require("../controller/NotesController");

const notesController = new NotesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;