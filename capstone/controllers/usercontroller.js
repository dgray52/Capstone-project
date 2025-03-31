const { json } = require("express");
const User = require('../models/users');
const session = require('express-session');
const flash = require('connect-flash');

// Register a new user
exports.register = async (req, res, next)=>{

    try{
        let email = req.body.email;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Email already exists
            req.flash('error', 'Email is already registered.');
            res.redirect('/register');
            
        }else{
            // create a new user 
            let user = new User(req.body);
            await user.save();
            console.log(user);
            req.flash('success', 'You have successfully registered.');
            res.redirect('/login');
        }


    } catch(err) {
        next(err);
    }
};

//get the sign up form
exports.registerIndex = (req, res)=>{
    res.render('auth/register');
};

//get the login form
exports.loginIndex = (req, res)=>{
    res.render('auth/login');
}

//process login request
exports.login = (req, res, next)=>{

    //authenticate user's login request
    let email = req.body.email;
    let password = req.body.password;

    //get the user that matches the email
    User.findOne({email: email})
    .then(user=>{
        if(user){
            //user found in the database
            user.comparePassword(password)
            .then(result=>{
                if(result){
                    req.session.user = user._id; // store user's id in the session
                    req.flash('success', 'You have successfully logged in');
                    res.redirect('/profile');
                }else{
                    console.log('wrong password');
                    req.flash('error', 'Wrong password!');
                    res.redirect('/login');
                }
            })
        }else{
            console.log('wrong email address');
            req.flash('error', 'Wrong email address!');
            res.redirect('/login');
        }
    })
    .catch(err=>next(err));
};


exports.profileIndex = (req, res, next) => {
    let id = req.session.user;
    User.findById(id)
    .then(user=>res.render('profile', {user}))
    .catch(err=>next(err));
}

exports.logout = (req, res, next) =>{
    req.session.destroy(err=>{
        if(err)
            return next(err);
        else
            res.redirect('/');
    });
};
