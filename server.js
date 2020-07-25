// DEPENDENCIES
const express = require('express');
const app = express();
const methodOverride = require("method-override")

const marsMissions = require('./models/marsMissions.js')

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)



// PORT
const port = 3000;

// INDEX Route
// INDEX ROUTE 
app.get('/marsMissions', (request, response) => {
  response.render('index.ejs', { marsMissions })
})


// SHOW Route
// SHOW ROUTE 
app.get('/marsMissions/:index', (request, response) => {
  response.render('show.ejs', {
      marsMissions: marsMissions[request.params.index]
  })
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
