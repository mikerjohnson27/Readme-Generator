
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `

  # ${data.Title}
  
  # ${data.subheading}

  ## Description

  ${data.discription}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage

  Provide instructions and examples for use. Include screenshots as needed. 


  ## Credits

  Links to sourses:

  Links and contact information to contributors:


  ## License

  #https://img.shields.io/badge/License-${data.license}-blue

  ---
  ## Features

  If your project has a lot of features, list them here.

  ## How to Contribute

  Please fork the repo clone to your local machien and 


  ## Tests

  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
