const model = require("../models/matchdata");

exports.index = (req, res) => {
    let games = model.find();
    res.render('matches/index', {games});
};
exports.new = (req, res) => {
    res.render('matches/newgame');
};
exports.create = (req, res) => {
    let newgame=req.body;
    console.log(newgame);
    model.newgame(newgame);
    res.redirect('/matches/')
};
exports.show = (req, res) => {
   let id=req.params.id;
   
    let game=model.findById(id.toString());
    console.log(id,game);
    res.render('matches/game', {game});
};
exports.edit = (req, res) => {
    let id =req.params.id;
    let game=model.findById(id.toString());
    res.render('matches/edit', {game});
};
exports.update = (req, res) => {
    let update=req.body;
    let id=req.params.id;
    model.updateById(id,update);
    res.redirect('/matches/');
};
exports.delete = (req, res) => {
    let id=req.params.id;
    model.deleteById(id);
    res.redirect('/matches/');
};