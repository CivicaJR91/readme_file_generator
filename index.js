const inquirer = require ('inquirer');
const fs = require ('fs');

const util = require ('util');

const writeReadme = util.promisify(fs.writeFile);

let linceseList= ["NPM", "Inquirer 5.6.2", "Node.js"];


// QUESTIONS PROMPT TO THE USERS

const promptQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'project',
            message: 'Enter Your Project Name',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description about your project',
        },
    
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instruction about your application',
    
        },
    
        {
            type: 'input',
            name: 'usage',
            message: 'How this application should be used?'
        },
    
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which lincese are you using in this applicaion?',
            choices:linceseList,
            
            
        },
    
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions on how contributing to this application',
        },
        
        { 
            type: 'input',
            name: 'test',
            message: 'Describe how users should be testing this application',
    
        },
        
        {
            type: 'input',
            name: 'question1',
            message: 'Enter your GitHub Usersname:',
        },
    
        {
            type: 'input',
            name: 'question2',
            message: 'Enter your GitHub profile link:',
        },
    
        {
            type: 'input',
            name: 'question3',
            message: 'Enter your email address for users to reach you if they have any questions:',
        },
    ]);
}

const generateRM = (answers) =>

//README FILE TEMPLATE

`
# My Project Name: ${answers.project}
[INQUIRER NMP PACKAGE](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=6.5.2&x2=0)

## Project Description
${answers.description}

## Table of Content
* [Installation](#installation) 
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
    
## Installation
${answers.installation}

## Usage
${answers.usage}

## Lincense
* ${answers.linceseList}


## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
For any questions, please reach out to me:
    Find me in GitHub: ${answers.question1} | [My GitHub Profile](${answers.question2}) | [Email Me](${answers.question3})
`;

// FUNCTION TO WAIT FOR ALL THE PROMPT QUESTIONS, ANWERS BEFORE GENERATING THE FILE
const init = async () => {
    try {
      const answers = await promptQuestions();
  
      const readme = generateRM(answers);
  
      await writeReadme('README.md', readme);
  
      console.log('Successfully README.md was generated');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();