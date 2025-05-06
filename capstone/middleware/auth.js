const Item = require('../models/data');
const Game = require('../models/matchdata');

exports.isGuest = (req, res, next)=>{
    if(!req.session.user){
        return next();
    }else{
        req.flash('error', 'You are logged in already');
        req.session.save(()=>{
            return res.redirect('/users/profile');
        })
    }
}

exports.isLoggedIn = (req, res, next) => {
    if(req.session.user){
        return next();
    }else{
        req.flash('error', 'You need to login first');
        req.session.save(()=>{
            return res.redirect('/users/login');
        })
    }
}
