export default class StringSchema {
  validators = [(value) => typeof value === 'string'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  startsFromUpperCase() {
    const forbiddenValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '?', ' '];
    const validator = (value) => (value !== '' ? value[0].toUpperCase() === value[0] && !forbiddenValues.includes(value[0]) : false);
    this.validators.push(validator);
    return this;
  }

  length(num) {
    const validator = (value) => value.length === num;
    this.validators.push(validator);
    return this;
  }

  hasExclamation() {
    const validator = (value) => value.includes('!');
    this.validators.push(validator);
    return this;
  }
}
