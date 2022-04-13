const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
const inquirer = require('inquirer')

const askManager = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the team managers name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the team managers ID?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the team managers email?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the team managers office number?',
        },
    ])

        .then(answers => {
            mainMenu();
        })
}

const mainMenu = () => {
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Finished'],
        },
    ])

    .then(answer => {
        if(answer.choice === 'Add Engineer') {
            askEngineer();
        } else if (answer.choice === 'Add Intern') {
            askIntern();
        } else {
            return;
        }
    })
}


const askEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the engineers name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the engineers ID number?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineers email?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the engineers github?',
        },
    ])
        .then(answers => {
            mainMenu();
        })
}
const askIntern = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the interns name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the interns ID number?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the interns email?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the interns school name?',
        },
    ])

        .then(answers => {
            mainMenu();
        })
}


askManager();

