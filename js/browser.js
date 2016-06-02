var Repository = require('../js/repository.js').Repository;

$(document).ready(function() {
  var currentRepository = new Repository();
  $('#user-info').submit(function(event){
    event.preventDefault();
    var user = $('#username').val();
    $('#username').val("");
    var repositories = currentRepository.getRepos(user);
    $('.showRepositories').text('These are the repositories for username: ' + user);
  });
});
