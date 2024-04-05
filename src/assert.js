import {DAYS_OF_WEEK} from "/src/contains/DAYS_OF_WEEK.js";
import {getDayByZellerAlgorythm} from "/src/zeller.js";

export function assert(day, month, year, valueToCheck) {
    const resultValue = DAYS_OF_WEEK[getDayByZellerAlgorythm(day, month, year)];
    if (valueToCheck !== resultValue) {
        console.log(day, " of ", month, "  ", year, " gave ", resultValue, " should be ", valueToCheck, ". This is an error. <br>");
        return false;
    }

    return true;
};