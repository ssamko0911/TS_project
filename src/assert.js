import {DAYS_OF_WEEK} from "/src/contains/DAYS_OF_WEEK.js";
import {getDayByZellerAlgorythm} from "/src/coreZellerFunction.js";
import {getMonthName} from "/src/helperFunctions.js";

export function assert(day, month, year, valueToCheck) {
    const resultValue = DAYS_OF_WEEK[getDayByZellerAlgorythm(day, month, year)];
    if (valueToCheck !== resultValue) {
        console.log(`${day} day of ${getMonthName(month)} ${year} gave ${resultValue} instead ${valueToCheck}. This is an error`);
        return false;
    }

    return true;
}