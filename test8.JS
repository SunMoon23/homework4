// Task 8: Write a function (that might be a part of a chatbot program) that converts the numeric representation of 
// a two-digits number to text. For example, typing "25" will return "twenty five" as the result. 
// *Please note: if you are going to write a switch for 90 options, this is far from the most optimal way. 
// Consider separating tens and ones.


function numberToText(num) {
    if (num < 10 || num >= 100) {
        return "Please enter a two-digit number.";
    }

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const tensPart = Math.floor(num / 10);
    const onesPart = num % 10;

    if (tensPart === 1 && onesPart !== 0) {
        return teens[onesPart];
    }

    return `${tens[tensPart]} ${ones[onesPart]}`.trim();
}

const userInput = Number(prompt("Enter a two-digit number: "));
console.log(numberToText(userInput));