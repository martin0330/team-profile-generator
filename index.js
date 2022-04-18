// prompt for team members and their information
// generate html file nicely formatted 
// when i click their email then my default email program opens
// when i click on github then that github profile pops up
const generatePage = require('./src/generatePage.js')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamArray = []

const fs = require('fs')
const inquirer = require('inquirer')

const askManager = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the team managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name!');
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the team managers ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter managers ID!');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the team managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enther the managers email!');
                    return false;
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the team managers office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the managers office number!');
                    return false;
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
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
            if (answer.choice === 'Add Engineer') {
                askEngineer();
            } else if (answer.choice === 'Add Intern') {
                askIntern();
            } else {
                return writeFile(teamArray);
            }
        })
}


const askEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the engineers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter engineers name!');
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the engineers ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter engineers ID number!');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter engineers email address!');
                    return false;
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the engineers github?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter engineers github name!');
                    return false;
                }
            }
        },
    ])
    .then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        console.log(engineer);
    })
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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter interns name!');
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the interns ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter interns ID number!');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the interns email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter interns email address!');
                    return false;
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the interns school name?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter interns school name!');
                    return false;
                }
            }
        },
    ])
        .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        console.log(intern);
    })
        .then(answers => {
            mainMenu();
        })
}

const writeFile = data => {
    const stringData = JSON.stringify(data)
    fs.writeFile('./dist/index.html', stringData, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been generated!')
        }
    })
}


askManager()
    // .then()
    // .then(teamArray => {
    //     return generatePage(teamArray);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .catch(err => {
    //     console.log(err)
    // })



