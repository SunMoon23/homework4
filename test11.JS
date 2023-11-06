// Task 11: The coffee house has a complex system for giving loyalty points to regular customers: 
// For the first two orders, 1 point is awarded. For the next - the sum of the two previous ones. 
// For example, here are the points that will be given for the first 8 orders: 1, 1, 2, 3, 5, 8, 13, 21.
//  Write a function that will receive a number from the user (the order number) and 
//  will return the number of loyalty points to be given.

function calculateLoyaltyPoints(orderNumber) {
    if (orderNumber <= 2) {
        return 1;
    }

    let previous=1;
    let current=1;
    let next=0;

    for (let i = 3; i <= orderNumber; i++) {
        next= previous + current;
        previous = current;
        current = next;
    }

    return current;
}

const orderNumber = Number(prompt("Enter number of the orders:"));
console.log(calculateLoyaltyPoints(orderNumber));