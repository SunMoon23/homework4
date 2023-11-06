// Task 10: Write a function that calculates the amount of a bank deposit at the end of its term. 
// The function asks the user for 3 numbers (initial amount, duration in years, % per year) and
//  returns the amount of savings after the deposit expires. Please note that interest on the deposit 
//  is calculated once a year on the entire amount. For example, with a deposit of 1000 at 10%, 
//  at the end of the first year, the total amount will be 1100, and at the end of the second year it will be 1210.


function calculateDeposit (initialAmount, durationInYears, percentagePerYear) {
    let deposit = initialAmount;
    for (let i=1; i<=durationInYears; i++) {
    deposit += (deposit * percentagePerYear) / 100;
} 
    return deposit;
}
const initialAmount = Number(prompt("Enter Initial Amount of your bank account:"));
const durationInYears= Number(prompt("how many year will you deposit your amount? "));
const percentagePerYear= Number(prompt("Enter deposit percent per year:"));
console.log(calculateDeposit(initialAmount, durationInYears, percentagePerYear));