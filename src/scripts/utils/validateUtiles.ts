export const composeValidators = (...validators: any[]) => (value: string) => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
};

export const required = (value: any) => (value ? undefined : 'this field is required');

export const maxLength = (maxLengthValue: number) => (value: string) => (
  (value && value.length <= maxLengthValue) ? undefined : `max length is ${maxLengthValue} symbols`
);

export const validateEmail = (value: string) => {
  const regExp = /^[^-.](([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return regExp.test(value) ? undefined : 'incorrect email';
};