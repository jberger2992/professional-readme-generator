const inquirer = require('inquirer');
const fs = require('fs');
function licenseCheck(lic){
  if(lic === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(lic === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if(lic === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the descrption of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage information of your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines for your project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions for your project?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'list',
      choices: ["MIT","IBM","Mozilla"],
      message: 'What license does your project use?',
      name: 'license',
    },
  ])
  .then(answers=>{
        const readmeString = `
# ${answers.title}
${licenseCheck(answers.license)}
## Description
${answers.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contribution}
## Tests
${answers.test}
## Questions
Contact us with questions at ${answers.email} or on GitHub at https://github.com/${answers.github}
## License
This project uses the ${answers.license} license.
        `
      fs.writeFile(`./tests/README.md`, readmeString,(err)=>{
        if(err){
            throw err
        }
      })
  });