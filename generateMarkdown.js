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
  Project Title
  ${data.Title}

  ${data.license}

  Table of Contents
  * Description
  * Installation
  * Usage
  * Contribution
  * Testing
  * Questions
  
  Project Description
  ${data.Description} 

  Installation Command
  ${data.Installation} 

  Usage Instructions
  ${data.Usage} 

  Contribution Instructions
  ${data.Contributions} 

  Test Command
  ${data.Test}

  If you have any questions, I can be reached through:
  Email: ${data.email}
  OR
  GitHub: ${data.github}
`;
}

module.exports = generateMarkdown;
