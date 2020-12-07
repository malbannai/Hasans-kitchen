const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemsCategories = require("./routes/categories");
const itemsIngrediant = require("./routes/ingrediants");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/items/categorie", itemsCategories);
app.use("/items/ingrediant", itemsIngrediant);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(8000, async () => {
  try {
    // await db.sequelize.sync({ alter: true });
    await db.sequelize.sync({ force: true });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
});
