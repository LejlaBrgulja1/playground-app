let express = require("express");
let router = express.Router();
let Controller = require("../controllers/quiz");

router.get("/:id", Controller.get);
router.post("/", Controller.post);

module.exports = router;