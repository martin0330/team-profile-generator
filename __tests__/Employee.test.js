const Employee = require('../lib/Employee')

test('', () => {
    const testName = "Bob";
    const testId = '5';
    const testEmail = 'yahoo.com';

const employee = new Employee(testName, testId, testEmail);



expect(employee.name).toBe(testName);
expect(employee.id).toBe(testId);
expect(employee.email).toBe(testEmail);
})