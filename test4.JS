// Task 4: There are several types of seats in the restaurant:
// 1. Small table - up to 2 people;
// 2. Medium table - up to 4 people;
// 3. Large table - up to 8 people.
// The restaurant will not be able to accommodate a company of more than 8 people within one table :’-(
// Write a function that will receive the number of guests from the user and suggest the most suitable table.


function getAppropriateTable () {
    let guests = Number(prompt("Enter a number of the guests: "));
    
    if (guests <= 0) {
        return "Please enter a right number of guests.";
    }
    else if (guests <= 2){
        return "small table";
    }
    else if (guests <= 4){
        return "medium table";
    }
    else if (guests <= 8){
        return "large table";
    }
    else {
        return "Sorry, the restaurant cannot accommodate more than 8 people within one table.";
    }

}

console.log(getAppropriateTable());