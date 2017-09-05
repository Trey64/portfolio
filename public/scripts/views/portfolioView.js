'use strict';

var app = app || {};

const portfolioView = {};

$('#projects').hide();
$('#about').hide();

portfolioView.handleCarousel = function() {
  var carouselSlider = setInterval(function(){
    $('.carousel ul').animate({marginLeft:-1440},1000,function(){
      $(this).find('li:last').after($(this).find('li:first'));
      $(this).css({marginLeft:0});
    })
  },5000);
};

portfolioView.initIndexPage = function() {
  portfolioView.handleTabNav();
  portfolioView.handleCarousel();
}
