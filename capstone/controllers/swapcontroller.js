const model = require("../models/data");

exports.index = (req, res) => {
    let items = model.find();
    console.log(items);
    console.log("items");
    res.render('swap/index', {items});
};
exports.new = (req, res) => {};
exports.create = (req, res) => {};
exports.show = (req, res) => {
};
exports.edit = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};