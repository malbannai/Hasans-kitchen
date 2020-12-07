const { Ingrediant } = require("../db/models/");

exports.myList = async (req, res, next) => {
  try {
    const data = await Ingrediant.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

//Create
exports.createItem = async (req, res, next) => {
  try {
    const newItem = await Ingrediant.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};
