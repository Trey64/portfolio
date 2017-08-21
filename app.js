'use strict';

var portfolioView = {};

$('#projects').hide();
$('#about').hide();

portfolioView.handleTabNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $where = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $where).fadeIn(1000);
  });
};

portfolioView.handleCarousel = function() {
  var carouselSlider = setInterval(function(){
    $(".carousel ul").animate({marginLeft:-1440},1000,'easeInBack',function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
    })
  },5000);
};

$(document).ready(function() {
  portfolioView.handleTabNav();
  portfolioView.handleCarousel();
});
