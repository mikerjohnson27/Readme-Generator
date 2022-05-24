
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  
  # ${data.subheading}
  
  ## Description

  ${data.discription}

  ## Table of Contents

  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)
    [Features]{#features}
    [Links]{#links}

  ## Installation

  ${data.install}

  ## Credits

  Links to sources:
  ${data.sources}

  Links and contact information to contributors:

  Names: ${data.names}
  GitHub Username: [${data.username}]{https://github.com/${data.username}}
  Email: ${data.email}(mailto:${data.email})


  ## License

  #https://img.shields.io/badge/License-${data.license}-blue

  ---
  ## Features
  
  ${data.features}

  ## How to Contribute

  Please fork the repo clone to your local machine and edit the code then submit a pull request. 


  ## Links

  Live link: ${data.liveLink}
  Repo link: ${data.repoLink}



`};

module.exports = generateMarkdown;
