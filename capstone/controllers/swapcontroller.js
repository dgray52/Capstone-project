const model = require("../models/data");

exports.index = (req, res,next) => {
    model.find()
    .then(items=>{
        res.render('./swap/index',{items});})
    .catch(err=>{next(err);});
};
exports.new = (req, res) => {
    res.render('swap/newitem');
};
exports.create = (req, res,next) => {
    
    let newitem= new model(req.body);
    newitem.createdby=req.session.user;
    if(req.file){
    newitem.img = "/images/" + req.file.filename;}
    newitem.save()
    .then(()=>{
        console.log(newitem);
        res.redirect('/swaps/');
    })
    .catch(err=>{
        next(err);
    });
    
};
exports.show = (req, res,next) => {
   let id=req.params.id;

   if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err=new Error('invalid item id');
        err.status=400;
        return next(err);
    }
    model.findById(id)
    .then(item=>{
    if(item)

        {   req.session.lastitemseen=id;
            res.render('swap/item', {item});  }
    else{let err=new Error('cannont find item with id' + id);
        err.status=404;
        next(err);
    }
    })
    .catch(err=>{next(err);});
    
};
exports.edit = (req, res,next) => {
    let id=req.params.id;
    let item = model.findById(id);
   if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err=new Error('invalid item id');
        err.status=400;
        return next(err);
    }
    model.findById(id)
    .then(item=>{
    if(item)
        { res.render('swap/edit', {item});  }
    else{let err=new Error('cannont find match with id' + id);
        err.status=404;
        next(err);
    }
    })
    .catch(err=>{next(err);});
    
};
exports.update = (req, res,next) => {
    let item = req.body;
    if(req.file){
    item.img = "/images/" + req.file.filename;}
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/))
        {
            let err=new Error('invalid item id');
            err.status=400;
            return next(err);
        }
    model.findByIdAndUpdate(id, item, {useFindAndModify:false,runValidators:true})
    .then(item=>{
        if (item) {
            res.redirect('/swaps/' + id);
        } else {
            let err = new Error('Cannot find a items with id ' + id);
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
            let err=new Error('invalid item id');
            err.status=400;
            return next(err);
        }
    model.findByIdAndDelete(id,{useFindAndModify:false})
    .then(item=>{
        if (item) {
            res.redirect('/swaps/');
        } else {
            
            let err = new Error('Cannot find a item with id ' + id);
            err.status = 404;
            next(err);
            
        }
    })
    .catch(err => { 
        next(err); });
    
};