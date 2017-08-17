'use strict'

var articleView = {};

$('#projects').hide();
$('#about').hide();

articleView.handleTabNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $where = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $where).fadeIn(1000);
  });
};

$(document).ready(function() {
  articleView.handleTabNav();
})
