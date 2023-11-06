// Task 6: The shop stores the following information about customers:
// - Name;
// - Age;
// - The number of orders;
// - Amounts of orders.
// The store offers a discount to regular customers and customers over 60 years of age.
// A customer is considered a regular if he or she made 4 or more orders with a total amount of 100 AZN or more. 
//Write a function that will receive customer’s data as input and return information whether the customer 
//receives a discount or not.

function getDiscount (name, age, theNumberOfOrders, amountsOfOrders) {

    if (theNumberOfOrders>=4 && amountsOfOrders>=100){
        return `you'll get a discount`;
    }

    if (age>60){
        return `you'll get a discount`;
    }
    return `you won't get a discount`;
}

const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));
const theNumberOfOrders = Number(prompt("Enter the number of your orders: "));
const amountsOfOrders = Number (prompt("Enter amounts of orders: ")); 

console.log(getDiscount(name, age, theNumberOfOrders, amountsOfOrders));