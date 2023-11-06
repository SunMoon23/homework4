// Task 13: The ATM contains banknotes in denominations of 100, 50, 20, 10, 5 and 1 AZN. Write a function 
// that receives the amount requested from the ATM and returns the optimal banknotes for the user's request.
// The option with the smallest number of banknotes is optimal. For example, when requesting 73 AZN,
// it would be optimal to give one 50₼, one 20₼ and three 1₼ banknotes.

function getBankNote(amount){
    const bankNotes=[100,50,20,10,5,1];
    const toDispense={};

    for(const bankNote of bankNotes) {
        const count= Math.floor(amount/bankNote);
        if (count > 0 ){
            toDispense[bankNote]= count;
            amount -= count * bankNote;
        }
    }
    return toDispense;
}
const amount=Number(prompt("enter amount that you want to dispense:"));

console.log=Number(getBankNote(amount));