const Employee = require('./Employee')

class Engineer extends Employee {
        constructor(name, id, email, github){
            super(name, id, email)
            this.getGithub = github
        }

        getGithub(){
            return this.github
        }

        getRole(){
            return 'engineer'
        }
}




module.exports = Engineer;