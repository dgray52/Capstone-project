const model = require("../models/data");

exports.index = (req, res) => {
    let items = model.find();
    res.render('swap/index', {items});
};
exports.new = (req, res) => {
    res.render('swap/newitem');
};
exports.create = (req, res) => {
    let newitem=req.body;
    console.log(newitem);
    model.newItem(newitem);
    res.redirect('/swaps/')
};
exports.show = (req, res) => {
   let id=req.params.id;
   
    let item=model.findById(id.toString());
    console.log(id,item);
    res.render('swap/item', {item});
};
exports.edit = (req, res) => {
    let id =req.params.id;
    let item=model.findById(id.toString());
    res.render('swap/edit', {item});
};
exports.update = (req, res) => {
    let update=req.body;
    let id=req.params.id;
    model.updateById(id,update);
    res.redirect('/swaps/');
};
exports.delete = (req, res) => {};