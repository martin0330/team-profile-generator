const Manager = require('../lib/Manager')

test('', () => {
    const testName = "Bob";
    const testId = '5';
    const testEmail = 'yahoo.com';
    const testOfficeNumber = '132';

const manager = new Manager(testName, testId, testEmail, testOfficeNumber);



expect(manager.name).toBe(testName);
expect(manager.id).toBe(testId);
expect(manager.email).toBe(testEmail);
expect(manager.officeNumber).toBe(testOfficeNumber);
})