const { Categorie } = require("../db/models/");

exports.myList = async (req, res, next) => {
  try {
    let data = await Categorie.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      // attributes: ["id", "name"],
      // include: [
      //   {
      //     model: Ingrediant,
      //     as: "items",
      //     attributes: { exclude: ["createdAt", "updatedAt"] },
      //   },
      // ],
    });

    //   if (req.params.categorieId) {
    //     const { categorieId } = req.params;
    //     const wantedCategorie = data.filter((item) => categorieId == item.id);
    //     data = wantedCategorie;
    //   }
    res.json(data);
  } catch (error) {
    next(error);
  }
};

//Create
exports.createCategorie = async (req, res, next) => {
  try {
    const newItem = await Categorie.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};
