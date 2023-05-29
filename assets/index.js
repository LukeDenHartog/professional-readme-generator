const fs = require('fs');

var inquirer = require('inquirer');
const { title } = require('process');
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
    type: 'input',
    name: 'installation',
    message: 'Give a description of how to install the project or anything needed to run it.'
  },  
  {
    type: 'input',
    name: 'usage',
    message: 'Give a description of how to use the project.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Give a description of the steps that need to be followed in order to run tests or verify the functionality of a project or software.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['GPL General Public License', 'MiT License', 'Apache License 2.0']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  }

  ])
  .then((answers) => {
    
    titleName = `# ${answers.title}`;
    descriptionSubtitle = "## Description";
    installationHeader = "## Installation";
    usageHeader = "## Usage";
    contributionGuidelineHeader = "## Contribution Guidelines";
    testHeader = "## Test Instructions";
    questionsHeader = "## Questions";
    tableOfContents = "## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribution Guidelines](#contribution-guidelines)\n- [Tests](#test-instructions)\n- [Questions](#questions)";
    licenseHeader = '## License'
    questionsHeader = '## Questions'
    description = answers.description;
    installationInfo = answers.installation;
    usageInfo = answers.usage;
    testInstructions = answers.test;
    githubUsername = answers.github;

    
    if (answers.license === 'GPL General Public License 3.0') {
      licenseChoice = 'GPL General Public License 3.0'
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (answers.license === 'MiT License') {
      licenseChoice = 'MiT License'
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else (answers.license === 'Apache License 2.0') 
      licenseChoice = 'Apache License 2.0';
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    


    readmeContent = `${titleName}\n\n${licenseBadge}\n\n${ descriptionSubtitle}\n\n${description}\n\n${tableOfContents}\n\n${installationHeader}\n\n${installationInfo}\n\n${usageHeader}\n\n${usageInfo}\n\n${testHeader}\n\n${testInstructions}\n\n${licenseHeader}\n\nThis application is covered under: ${licenseChoice}\n\n${questionsHeader}\n\n My GitHub username is: ${githubUsername} (https://github.com/${githubUsername}/)`;




    // Write the value of the title to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Your user input has been written to README file.');
    });

    // Rest of your code
    console.log('Answers:', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

