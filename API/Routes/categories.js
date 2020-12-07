const express = require("express");
const router = express.Router();
const { myList, createCategorie } = require("../controllers/itemController");

// const { createItem } = require("../controllers/ingrediantController");

//show the list
router.get("/", myList);

//creating a categorie
router.post("/", createCategorie);

// exporting
module.exports = router;
