// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === "None" ? "" : 
  `![${license}](https://img.shields.io/badge/license-${license.replace(/ /g, "_")}-blue.svg)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === "None" ? "" : `
  
  ## License

  This project is covered under the ${license} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${data.license === "None" ? "" : "* [License](#license)\n  "}* [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testing}

  ## Questions

  * [Github](https://www.github.com/${data.github})
  * [Email](mailto:${data.email})
`;
}

export default generateMarkdown;
