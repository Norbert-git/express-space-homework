// DEPENDENCIES
const express = require('express');
const app = express();

const marsMissions = require('./models/marsMissions.js')


// * Your mission is to complete the app
// * The app will need routes for index and show


// * The app will need routes for new and create
// * The app will need views for new (create will be handled in the controller)
// * After creating a new rover, render the index view
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// views/missions folder has not been created

// PORT
const port = 3000;

// INDEX Route
// INDEX ROUTE 
app.get('/marsMissions', (request, response) => {
  response.render('index.ejs', { marsMissions })
})
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission

// SHOW Route
// SHOW ROUTE 
app.get('/marsMissions:index', (request, response) => {
  response.render('show.ejs', {
      marsMissions: marsMissions[request.params.index]
  })
})
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
