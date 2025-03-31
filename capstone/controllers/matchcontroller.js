const model = require("../models/matchdata");

exports.index = (req, res,next) => {
    model.find()
    .then(games=>{res.render('./matches/index',{games});})
    .catch(err=>{next(err);});
};
exports.new = (req, res) => {
    res.render('matches/newgame');
};
exports.create = (req, res,next) => {
    let newgame=new model(req.body);
    newgame.img = "/images/" + req.file.filename;
    newgame.save()
    .then(()=>{
        res.redirect('/matches/')
    })
    .catch(err=>{next(err);});
    
};
exports.show = (req, res,next) => {
   let id=req.params.id;
   if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err=new Error('invalid match id');
        err.status=400;
        return next(err);
    }
    model.findById(id)
    .then(game=>{
    if(game)
        { res.render('matches/game', {game});  }
    else{let err=new Error('cannont find match with id' + id);
        err.status=404;
        next(err);
    }
    })
    .catch(err=>{next(err);});
    
};
exports.edit = (req, res,next) => {
    let id=req.params.id;
    let game = model.findById(id);
   if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err=new Error('invalid match id');
        err.status=400;
        return next(err);
    }
    model.findById(id)
    .then(game=>{
    if(game)
        { res.render('matches/edit', {game});  }
    else{let err=new Error('cannont find match with id' + id);
        err.status=404;
        next(err);
    }
    })
    .catch(err=>{next(err);});
    
};
exports.update = (req, res,next) => {
    let game = req.body;
    game.img = "/images/" + req.file.filename;
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/))
        {
            let err=new Error('invalid match id');
            err.status=400;
            return next(err);
        }
    model.findByIdAndUpdate(id, game, {useFindAndModify:false,runValidators:true})
    .then(game=>{
        if (game) {
            res.redirect('/matches/' + id);
        } else {
            let err = new Error('Cannot find a match with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => { 
        if(err.name='ValidationError')
        {
            err.status=400;
        }
        next(err); });
};
exports.delete = (req, res,next) => {
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/))
        {
            let err=new Error('invalid match id');
            err.status=400;
            return next(err);
        }
    model.findByIdAndDelete(id,{useFindAndModify:false})
    .then(game=>{
        if (game) {
            res.redirect('/matches/');
        } else {
            
            let err = new Error('Cannot find a match with id ' + id);
            err.status = 404;
            next(err);
            
        }
    })
    .catch(err => { 
        next(err); });
    
};