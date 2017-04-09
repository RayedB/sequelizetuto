var Post = require("../models/").Post;
var User = require("../models/").user;
var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req,res){
	User.findAll()
		.then(function(users){
			res.status(200).json(users);
		})
		.catch(function (error){
        res.status(500).json(error);
      });
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
}

exports.write = function(req,res){
	res.render('write')
}

exports.publish = function(req,res){
	Post.create({title: req.body.title, text: req.body.content})
      .then(function (newPost) {
        res.status(200).json(newPost);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
}