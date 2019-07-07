export const wait = delayInMs =>
  new Promise(resolve => setTimeout(resolve, delayInMs));

export const parseDecimal = value => 
  parseInt(value, 10);