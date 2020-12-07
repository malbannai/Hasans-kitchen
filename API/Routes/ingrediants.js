const express = require("express");
const router = express.Router();
const { myList, createItem } = require("../controllers/ingrediantController");

//show the list
router.get("/", myList);

//creating an ungrediant
router.post("/", createItem);

// exporting
module.exports = router;
