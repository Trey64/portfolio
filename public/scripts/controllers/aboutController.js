'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('.tab-content').hide();
    $('#about').show();

  }

  module.aboutController = aboutController;
})(app);
