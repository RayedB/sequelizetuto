var Post = require("../models/").Post;
var User = require("../models/").user;
var path = require("path");

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.sendFile('register.html', { root: path.join(__dirname, '../public','views') });
 
}

exports.signin = function(req, res) {
 
    res.sendFile('login.html', { root: path.join(__dirname, '../public','views') });
 
}

exports.loggedin = function(req,res){
  res.status(200).sendFile('index.html', { root: path.join(__dirname, '../public','views') });
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