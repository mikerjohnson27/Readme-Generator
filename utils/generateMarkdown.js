
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #https://img.shields.io/badge/license-${data.license}-blue
  ##${data.Title}

  #${data.subheading}
  ##Table of Contents:
  #Discription
  #Installation
  #Contributing
  #Creator Contact Information(Questions)
 

  [Created By:]
  Any questions or comments can be directed here: 
  [Name:](${data.name})

  [GitHub Username:](${data.username})

  [Contact Email:](${data.email})

  [Live link can be seen here:](${data.liveLink})

  
  [ABOUT](${data.discription})

`;
}

module.exports = generateMarkdown;
