// Task 9: Write a function that receives a number from the user and prints to the console all numbers 
// between 1 and 1000 that are divisible by the user's number without remainder.

function checkDivisibility(num){
    let divisibleNumbers = [];

    for (let index = 1; index <=1000; index++) {
        const reminder = index % num;
        if (reminder===0) {
            divisibleNumbers.push(index);
        }
    }

    return divisibleNumbers;

}
const num = Number(prompt("Enter a number: "));
console.log(checkDivisibility(num));
