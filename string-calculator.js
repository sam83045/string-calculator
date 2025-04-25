const add = (numbers) => {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];
  let negatives = [];

  // Handle custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterPart = numbers.slice(2, numbers.indexOf("\n"));
    numbers = numbers.slice(numbers.indexOf("\n") + 1); // Remove delimiter declaration

    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
      delimiters = delimiterPart.slice(1, -1).split("]["); // Multiple delimiters
    } else {
      delimiters = [delimiterPart]; // Single delimiter
    }
  }

  // Split numbers manually using delimiters
  let splitNumbers = [numbers];
  delimiters.forEach(delimiter => {
    splitNumbers = splitNumbers.flatMap(num => num.split(delimiter));
  });

  // Convert numbers to integers and check for negatives
  splitNumbers = splitNumbers.map(num => {
    const parsedNum = parseInt(num, 10);
    if (parsedNum < 0) negatives.push(parsedNum);
    return parsedNum;
  });

  if (negatives.length) throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);

  if (delimiters[0] === '!')
    return splitNumbers.reduce(multiplication, 1);
  else
    return splitNumbers.reduce(summation, 0);
};

const summation = (sum, num) => {
  return sum + (isNaN(num) ? 0 : num)
}

const multiplication = (sum, num) => {
  return sum * (isNaN(num) ? 0 : num)
}
module.exports = { add };