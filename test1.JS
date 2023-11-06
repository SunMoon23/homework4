//Task 1: The company needs to automate the customer registration process. Write a function that will prompt the 
//user for their last name, first name, and email address. After the user's response, the function should return 
//a string of the format:
//"*Mail* - *LastName* *FirstName*".

function registerCustomer() {
    let lastName = prompt("Please enter your last name:");
    let firstName = prompt("Please enter your first name:");
    let email = prompt("Please enter your email address:");

    return `Last Name: ${lastName}, First Name: ${firstName}, Email: ${email}`;
}

let customerInfo = registerCustomer();
console.log(customerInfo);


