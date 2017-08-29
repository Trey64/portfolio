'use strict';

var app = app || {};

page('/', portfolioView.initIndexPage);
page('/about', app.aboutController.init);
page('/projects', app.projectsController.init);

page();
