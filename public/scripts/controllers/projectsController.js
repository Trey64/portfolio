'use strict';

var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    $('.tab-content').hide();
    $('#projects').show();

  }

  module.projectsController = projectsController;
})(app);
