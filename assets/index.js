const fs = require('fs');

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
   {
    type: 'input',
    name: 'title',
    message: 'What would you like your title to be named'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of the project.'
  },
  {
    type: 'confirm',
    name: 'table',
    message: 'Would you like to add a Table of Context?'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log('Answers:', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });











//fs.readFile('', 'utf8', (err, data)=>);
                // path, data we want, and then our callback funtion
//fs.writeFile('README.md', process.argv[2], (error)=>);

// path, data that we want, and then our callback function