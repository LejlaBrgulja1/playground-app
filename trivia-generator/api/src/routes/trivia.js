let express = require("express");
let router = express.Router();
let Controller = require("../controllers/trivia");

router.get("/", Controller.get);

module.exports = router;