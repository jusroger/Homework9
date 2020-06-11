function generateMarkdown(data) {
  return `
# ${data.title},

[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)

# Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Licences](#licences)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

# Description
# ${data.description}

# Installation
\`\`\`
${data.installation}
\`\`\`

# Usage
# ${data.usage}

# Licenses
# ${data.license}

# Contribution
# ${data.contributing}

# Tests 
# ${data.tests}

# Questions
# ${data.author}

`;
}

module.exports = generateMarkdown;
