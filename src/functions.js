const defaultYear = new Date().getFullYear().toString();
const defaultMonth = (new Date().getMonth() + 1).toString();
const defaultDay = new Date().getDay().toString();

export function getInputYear() {
    let year;
    do {
        year = parseInt(window.prompt("Please enter year ( between 1900 and 2050)", defaultYear));
        if (isNaN(year))
            year = -1;
    }
    while (year < 1899 || year > 2051);
    return year;
}

export function getInputMonth() {

    let month;
    do {
        month = parseInt(window.prompt("Please enter month number ( between 1 and 12)", defaultMonth));
        if (isNaN(month))
            month = -1;
    }
    while (month < 1 || month > 12);

    return month;
}

export function getDays(Y, m) {
    return new Date(Y, m, 0).getDate();
}

export function getInputDay(Y, m) {
    let r = getDays(Y, m);
    let day;
    do {
        day = parseInt(window.prompt("Please enter day number ( between 1 and " + r + ")", defaultDay));
        if (isNaN(day))
            day = -1;
    } while (day < 1 || day > r);
    return day;
}


export function whichMonth(m)
{
    const date = new Date();
    date.setMonth(m - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}
