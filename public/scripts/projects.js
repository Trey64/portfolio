'use strict';

var projects = [];

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.screenshot = rawDataObj.screenshot;
  this.projectUrl = rawDataObj.projectUrl;
  this.description = rawDataObj.description;
}

Project.prototype.toHtml = function() {

  var projectTemplate = $('#project-template').html();

  var templateRender = Handlebars.compile(projectTemplate);

  return templateRender(this);
};
