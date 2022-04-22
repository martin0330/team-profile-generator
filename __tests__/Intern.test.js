const Intern = require('../lib/Intern')

test('', () => {
    const testName = "Bob";
    const testId = '5';
    const testEmail = 'yahoo.com';
    const testSchool = 'MSU';

const intern= new Intern(testName, testId, testEmail, testSchool);



expect(intern.name).toBe(testName);
expect(intern.id).toBe(testId);
expect(intern.email).toBe(testEmail);
expect(intern.school).toBe(testSchool);
})