const defaultYear = new Date().getFullYear().toString();
const defaultMonth = (new Date().getMonth() + 1).toString();
const defaultDay = new Date().getDay().toString();

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * A function to get user's input for year value with basic validation implemented,
 * @returns {number}
 */
export function getInputYear() {
    let year; // Local variable, used to hold user input;
    do {      //Control structure (loop), used to get user input perform basic validation for it;
        year = +prompt("Please enter year ( between 1900 and 2050)", defaultYear); // getting value of year from user and storing the value;
    }
    while (year < 1899 || year > 2051 || isNaN(year)); // End control structure (loop);

    return year; // returns validated year;
}

export function getInputMonth() {
    let month;
    do {
        month = +prompt("Please enter month number ( between 1 and 12)", defaultMonth);
    }
    while (month < 1 || month > 12 || isNaN(month));

    return month;
}

export function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export function getInputDay(year, month) {
    let daysInMonth = getDaysInMonth(year, month);
    let day;
    do {
        day = +prompt("Please enter day number ( between 1 and " + daysInMonth + ")", defaultDay);
    }
    while (day < 1 || day > daysInMonth || isNaN(day));

    return day;
}


export function getMonthName(month) {
    const date = new Date();
    date.setMonth(month - 1);

    return date.toLocaleString('en-US', {month: 'long'});
}
