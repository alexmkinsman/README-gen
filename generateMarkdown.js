// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `Project Title
  ${data.Title}

  ${data.license}

  Table of Contents: <br>
  [Description](#Description) <br>
  [Installation Instructions](#Installation-Instructions) <br>
  [Usage Instructions](#usage-instructions) <br>
  [Contribution Instructions](#contribution-instructions) <br>
  [Testing](#testing) <br>
  [Questions](#questions) <br>
  
  ## Description <br>
  ${data.Description} 

  ## Installation Instructions <br>
  ${data.Installation} 

  ## Usage Instructions <br>
  ${data.Usage} 

  ## Contribution Instructions <br>
  ${data.Contributions} 

  ## Testing
  ${data.Test}

  ## Questions
  If you have any questions, I can be reached through:
  Email: ${data.email}
  OR
  GitHub: ${data.github}
`;
}

module.exports = generateMarkdown;
