const Itemdata = require("../models/data");
const model= require('../models/offers');
const User = require('../models/users');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const { findById } = require("../models/matchdata");
exports.index = (req, res,next) => {
    model.find().populate("offerer","firstName lastName").populate("onItem","name")
        .then(offers=>{
            res.render('./offers/index',{offers});})
        .catch(err=>{next(err);});
};
exports.new = (req, res,next) => {
    res.render('offers/newoffer');
};
exports.create = (req, res,next) => {

    let offer= new model(req.body);
    console.log(req.body);
    offer.offerer=req.session.user;
    offer.onItem=req.session.lastitemseen;

    
   
    offer.save()
            .then((offer) => {
                req.flash('success','offer created successfuly');
                res.redirect('/offers');
            })
            .catch(err => { 
                if(err.name='ValidationError')
                {
                    err.status=400;
                }
                next(err); });
};
exports.show = (req, res,next) => {
};
exports.edit=(req,res,next)=>
{
    let temp=1;
    if(req.body.Accept==='2')
    {temp=2;

    }
    if(req.body.Reject==='3')
    {temp=3;}
    model.findByIdAndUpdate(req.params.id, {acepted:temp}, {useFindAndModify:false,runValidators:true})
        .then(offer=>{
            if (offer) {
                res.redirect('/offers');
            } else {
                let err = new Error('Cannot find a offer with id ' + id);
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
            if(req.body.Accept==='2')
                {
            
                    model.findById(req.params.id).
                then(offer=>{
                    let temp=offer.onItem;
                    Itemdata.findByIdAndUpdate(temp,{active:false}).catch(err=>{next(err);});
            
                }).catch(err=>{next(err);});
                }
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
        .then(offer=>{
            if (offer) {
                res.redirect('/offers');
            } else {
                
                let err = new Error('Cannot find a item with id ' + id);
                err.status = 404;
                next(err);
                
            }
        })
        .catch(err => { 
            next(err); });
};

