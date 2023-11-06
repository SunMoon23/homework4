// Task 3: Each product in the online store receipt is described by the following values:
// - Name;
// - Unit price;
// - Quantity;
// - Participates in the promotion (yes/no).
// Write a function that receives the listed values and calculates the receipt’s amount according to the following
// rules:
// - If the quantity of the product is greater than or equal to 5, then a 10% discount is applied to the product. 
// - If the product participates in the promotion, a 15% discount is applied.
// Discounts may be cumulative.


function getReceipt() {
    let nameofproduct = prompt ("Enter product name:");
    const unitprice = Number(prompt ("Enter price of unit:"));
    const quantity = Number(prompt ("Enter quantity of unit:"));
    const promotion = prompt ("Did you participate in promotion? (Yes or No) ").toLowerCase();
    let cost;
    if (quantity>=5 && promotion === "yes") {
        cost = (unitprice * quantity)-((unitprice * quantity * 25)/100);
    } else if (promotion === "yes") {
        cost = (unitprice * quantity)-((unitprice * quantity * 15)/100);
    }
    else if (quantity>=5) {
        cost = (unitprice * quantity)-((unitprice * quantity * 10)/100);
    }
    else {
        cost = (unitprice *quantity);
    }
    return "receipt's amount:" + cost;
}

console.log(getReceipt());