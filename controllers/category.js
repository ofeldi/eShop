const Category = require('../models/Category');

exports.createNewCategory = (req, res) => {
    const category = new Category({
        name:req.body.name
    });
    category.save()
        .then(category => res.status(200).json({
            msg: "category saved successfully",
            category: category
        }))
        .catch(err => console.log(err))
};

exports.getCategories = (req,res) => {
    Category.find({})
        .then(allCategories => res.status(200).json(allCategories))
        .catch(err => res.status(500).json({
            msg: "could not fetch categories"
        }))
};
