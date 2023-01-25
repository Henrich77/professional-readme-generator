// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  
  
  
  ## License


 
 
  ## Table of Contents
  
  [Description](#description)
  
  [Installation](#installation)
  
  [Contributions](#contributions)
  
  [Tests](#tests)
  
  [Questions](#questions)


 
   ## Description
  ${data.description}

  
  
  ## Installation 
  ${data.installation}

 
 
  ## Contributions

 
 
  ## Tests
  ${data.test}

  
  ## Questions

  If you have any additional questions please feel free to contact me 
  
  GitHub: ${data.username}
  
  Email:  ${data.email}




`;
}

module.exports = generateMarkdown;
