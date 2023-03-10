const { Router } = require('express');
const tagsRoutes = Router();


const TagsController = require("../controller/TagsController");
const tagsController = new TagsController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


tagsRoutes.get('/:user_id', ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes;