var apiKey = require('./../.env').apiKey;

exports.Repository = function(){
};
exports.Repository.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.showRepositories').text("These are the repositories for: " + user + ":" +response[0].name);
  }).fail(function(error) {
    $('.showRepositories').text(error.responseJSON.message);
  });
};
