var userInfo = require('../js/user.js').user;

$(document).ready(function(){
  $('#user-info').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
  });
});
