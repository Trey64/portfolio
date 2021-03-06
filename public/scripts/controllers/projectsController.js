'use strict';

var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    $('.tab-content').hide();
    $('#projects').show();
    app.repos.requestRepos(app.repoView.index);
  }

  module.projectsController = projectsController;
})(app);
