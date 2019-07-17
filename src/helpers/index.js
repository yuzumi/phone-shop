export const wait = delayInMs =>
  new Promise(resolve => setTimeout(resolve, delayInMs));

export const parseDecimal = value => 
  parseInt(value, 10);

export const compare = (a, b) => {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}

export const compareNumbers = (a, b) => a - b;