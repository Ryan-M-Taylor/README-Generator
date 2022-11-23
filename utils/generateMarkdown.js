// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge = `[![GitHub License](https://img.shields.io/badge/license-MIT-yellow.svg)]`;
    return licenseBadge;
  } else if (license === "APACHE 2.0") {
    licenseBadge = `[![GitHub License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    return licenseBadge;
  } else if (license === "GPL 3.0") {
    licenseBadge = `[![GitHub License](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    return licenseBadge;
  } else if (license === "BSD 3") {
    licenseBadge = `[![GitHub License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } else {
    return licenseBadge;
  }
};

// Returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink = "";
  if (license === "APACHE 2.0") {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
    return licenseLink;
  } else if (license === "BSD 3") {
    licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
    return licenseLink;
  } else if (license === "GPL 3.0") {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
    return licenseLink;
  } else if (license === "MIT") {
    licenseLink = `(https://opensource.org/licenses/MIT)`;
    return licenseLink;
  } else {
    return licenseLink;
  }
};

// Returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  let licenseSection = "";
  if (license === "MIT") {
    licenseSection = `
## License

This project is licensed under the MIT license.
`;
    return licenseSection;
  } else if (license === "APACHE 2.0") {
    licenseSection = `
## License

This project is licensed under the APACHE 2.0 license.
`;
    return licenseSection;
  } else if (license === "GPL 3.0") {
    licenseSection = `
## License

This project is licensed under the GPL 3.0 license.
`;
    return licenseSection;
  } else if (license === "BSD 3") {
    licenseSection = `
## License

This project is licensed under the MIT license.
`;
    return licenseSection;
  } else {
    return licenseSection;
  }
};

// Returns license section in Table of Contents. If there is no license, returns an empty string
const tocLicense = (license) => {
  let tocLicense = "";
  if (license === "None"){
    return tocLicense;
  } else {
    tocLicense = `
* [License](#license)
`;
    return tocLicense;
  }
};

// Generates markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
## Description 

${data.description}

## Table of Contents: 

* [Installation](#installation)

* [Usage](#usage)
${tocLicense(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).`;
};

module.exports = generateMarkdown;
