// Task 7: The shipping service accepts only orders that meet the following conditions as a small shipment:
// - The sum of the length, width and height of an item does not exceed 150cm;
// - None of the measurements exceed 100cm;
// - The weight of the shipment does not exceed 10 kg;
// - Delivery distance is in the range of 3 to 10km.
// Write a function that will receive data from the user about the shipment and report whether it is small.


function isSmallShipment(length, width, height, weight, distance) {
    const totalDimensions = length + width + height;

    if (totalDimensions <= 150 &&
        length <= 100 &&
        width <= 100 &&
        height <= 100 &&
        weight <= 10 &&
        distance >= 3 && distance <= 10) {
        return true;
    } else {
        return false;
    }
}

const length = Number(prompt("Enter the length of the item in cm: "));
const width = Number(prompt("Enter the width of the item in cm: "));
const height = Number(prompt("Enter the height of the item in cm: "));
const weight = Number(prompt("Enter the weight of the shipment in kg: "));
const distance = Number(prompt("Enter the delivery distance in km: "));

const result = isSmallShipment(length, width, height, weight, distance);
if (result) {
    console.log("The shipment is small.");
} else {
    console.log("The shipment is not small.");
}