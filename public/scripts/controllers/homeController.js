'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('.tab-content').hide();
    $('#about').show();

  }

  module.home = homeController;
})(app);
