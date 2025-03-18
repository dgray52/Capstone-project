const { json } = require("express");
const model = require("../models/users");

exports.register = (req, res, next)=>{
    let user = new model(req.body);
    user.save()
    .then((user)=>{
        console.log(user);
        res.redirect('/login'); 
    })
    .catch(err=>{
        res.json(err);
    });
}

exports.registerIndex = (req, res)=>{
    res.render('auth/register');
}

exports.loginIndex = (req, res)=>{
    res.render('auth/login');
}

exports.login = (req, res, next)=>{
    let user = req.body;

    model.findOne({ username: user.username }) // Use findOne instead of find
        .then(foundUser => {
            if (!foundUser) {
                return res.status(401).json({ message: "Username or password incorrect" });
            }

            // Verify password (assuming password is stored as plain text, but it should be hashed)
            if (foundUser.password !== user.password) {
                return res.status(401).json({ message: "Username or password incorrect" });
            }

            res.redirect("/");
        })
        .catch(err => {
            console.error("Login Error:", err);
            res.status(500).json({ message: "Server error" });
        });
};

