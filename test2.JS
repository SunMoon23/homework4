// Task 2: The courier service delivers at a single rate: 5 AZN fixed + 0.25 AZN for each kilometer of the road. 
// Write a function that will prompt the user for the distance in km and return the cost of delivery.


function getCostOfDelivery() {
    let km = parseFloat(prompt("Please enter km:"));
    let costofdelivery = (5 + (0.25 * km));
    return `Cost of delivery: ${costofdelivery}`;
}

let cost = getCostOfDelivery();
console.log(cost);