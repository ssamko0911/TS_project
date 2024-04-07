/**
 * Default value to prompt user current year as possible input
 * @type {string}
 */
const defaultYear = new Date().getFullYear().toString();

/**
 * Default value to prompt user current month as possible input
 * @type {string}
 */
const defaultMonth = (new Date().getMonth() + 1).toString();

/**
 * Default value to prompt user current day as possible input
 * @type {string}
 */
const defaultDay = new Date().getDate().toString();

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get user's input for year value with basic validation implemented
 * @returns {number}
 */
export function getInputYear() {
    let year; // Local variable, used to hold user input;
    do {      // Control structure (loop), used to get user input and perform basic validation for it;
        year = +prompt("Please enter year ( between 1900 and 2050)", defaultYear); // Getting value of year from user and storing the value;
    }
    while (year < 1899 || year > 2051 || isNaN(year)); // End control structure (loop);

    return year; // returns validated year;
}

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get user's input for month value with basic validation implemented
 * @returns {number}
 */
export function getInputMonth() {
    let month; // Local variable, used to hold user input;
    do {       // Control structure (loop), used to get user input and perform basic validation for it;
        month = +prompt("Please enter month number ( between 1 and 12)", defaultMonth); // Getting value of year from user and storing the value;
    }
    while (month < 1 || month > 12 || isNaN(month)); // End control structure (loop);

    return month; // returns validated month;
}

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get number of days for month chosen by user;
 * @param year
 * @param month
 * @returns {number}
 */
export function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); // Creation of Date object based on passed year and month to call standard function to get the number of the day;
}

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get user's input for day value with basic validation implemented
 * @param year
 * @param month
 * @returns {number}
 */
export function getInputDay(year, month) {
    let daysInMonth = getDaysInMonth(year, month); // Local variable, used to hold number of days in chosen month;
    let day; // Local variable, used to hold user's input for day;
    do {     // Control structure (loop), used to get user input and perform basic validation for it;
        day = +prompt("Please enter day number ( between 1 and " + daysInMonth + ")", defaultDay); // Getting value of day from user and storing the value;
    }
    while (day < 1 || day > daysInMonth || isNaN(day)); // End control structure (loop);

    return day; // returns validated day;
}

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get name of the month
 *
 * @param month
 * @returns {string}
 */
export function getMonthName(month) {
    const date = new Date(); // Local variable, used to store Date object;
    date.setMonth(month - 1); // Setting the value of the month taking into account start from 0 in the JS library;

    return date.toLocaleString('en-US', {month: 'long'}); // returns string value for month;
}
