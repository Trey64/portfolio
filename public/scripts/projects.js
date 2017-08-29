'use strict';

var projects = [];

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.description = rawDataObj.description;
  this.screenshot = rawDataObj.screenshot;
  this.projectUrl = rawDataObj.projectUrl;
  this.category = rawDataObj.category;
}

Project.prototype.toHtml = function() {

  var projectTemplate = $('#project-template').html();

  var templateRender = Handlebars.compile(projectTemplate);

  return templateRender(this);
};

// Project.loadAll = function(rawData) {
//   rawData.forEach(function(ele) {
//     Project.all.push(new Project(ele));
//   })
// }

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    // When rawData is already in localStorage,
    // we can load it with the .loadAll function above,
    // and then render the index page (using the proper method on the portfolioView object).
    // Project.loadAll($.parseJSON(localStorage.rawData));//DONE: What do we pass in to loadAll()?
    //DONE: What method do we call to render the index page?
    portfolioView.initIndexPage();
  } else {
    // DONE: When we don't already have the rawData,
    // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
    $.getJSON('data/projectData.json')
    .then(
      function(data) {
        // console.log(data);
        localStorage.setItem('rawData', JSON.stringify(data));
        // Project.loadAll(data);
        portfolioView.initIndexPage();
      },
    function(error){
      console.log(error);
    })
    Project.fetchAll();
  }
}
