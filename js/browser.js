var Repository = require('../js/repository.js').Repository;

$(document).ready(function() {
  var currentRepository = new Repository();
  $('#github-repo').click(function(){
    var user = $('#username').val();
    $('#username').val("");
    console.log(user);
    var repositories = currentRepository.getRepos(user);
    console.log(repositories);
    $('.showRepositories').text('These are the repositories for:' + user + ':' + repositories + '.');
  });
});
