/* eslint-disable require-jsdoc */
class ValidateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Validation Error';
  }
}

try {
  throw new ValidateError('invalid data');
} catch (error) {
  console.log(error); // validation error: invalid data
}
