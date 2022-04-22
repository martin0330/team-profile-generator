const Engineer = require('../lib/Engineer')

test('', () => {
    const testName = "Bob";
    const testId = '5';
    const testEmail = 'yahoo.com';
    const testGithub = 'martin0330';

const engineer = new Engineer(testName, testId, testEmail, testGithub);



expect(engineer.name).toBe(testName);
expect(engineer.id).toBe(testId);
expect(engineer.email).toBe(testEmail);
expect(engineer.github).toBe(testGithub);
})