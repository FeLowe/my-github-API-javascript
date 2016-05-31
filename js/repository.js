var apiKey = require('./../.env').apiKey;

exports.Repository = function(){
};

exports.Repository.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(response){
console.log(response);

    for (i = 0; i < response.length; i++){
    $('.showRepositories').append('<li>' + 'Repository name: ' + response[i].name + '</li>' + '<a>'+ 'Repository url: ' + response[i].git_url + '</a>' + '<p>' + 'Repository description: ' + response[i].description + '</p>' +  '<p>' + 'Latest update time: ' + response[i].updated_at + '</p>');
    }

  }).fail(function(error) {
    $('.showRepositories').text(error.responseJSON.message);
  });
};
