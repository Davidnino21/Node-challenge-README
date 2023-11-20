const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How to contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How to run test for your application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose license',
            choices: ['MIT', 'MirOS', 'BSD2', 'NONE']
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username?',

        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide email',
        },
    ])

    .then((answers) => {
        const readMeContent = generateREADME(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    })

const generateREADME = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
    `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#usage)
- [Contributions](#Contributions)
- [License](#license)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
Run commands
\`\`\`
${installation}
\`\`\`

## Usage
\`\`\`
${usage}
\`\`\`

## Contributions
\`\`\`
${contribution}
\`\`\`

##License
![license-${license}](https://img.shields.io/badge/license-${license}-yellowgreen.svg)

## Tests
\`\`\`
${test}
\`\`\`

## Questions
GitHub
\`\`\`
${github}
\`\`\`

Email
\`\`\`
${email}
\`\`\`
`;

