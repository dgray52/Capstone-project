const model = require("../models/data");

exports.index = (req, res) => {
    let items = model.find();
    res.render('swap/index', {items});
};
exports.new = (req, res) => {

};
exports.create = (req, res) => {};
exports.show = (req, res) => {
   let id=req.params.id;
   
    let item=model.findById(id.toString());
    console.log(id,item);
    res.render('swap/item', {item});
};
exports.edit = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};