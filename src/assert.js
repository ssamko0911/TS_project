import {DAYS_OF_WEEK} from "/src/contains/DAYS_OF_WEEK.js";
import {getDayByZellerAlgorythm} from "/src/coreZellerFunction.js";
import {getMonthName} from "/src/helperFunctions.js";

/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * Source for test data:
 * https://www.calculator.net/day-of-the-week-calculator.html
 *
 * A function to run tests, based on comparing correct data and calculated value for Zeller's congruence.
 * I.e: passed data is date: 01/01/1999 and 'Friday' as expected result.
 * If the value, calculated by core function getDayByZellerAlgorythm(), not equals value passed,
 * the indication of failed test will be produced in the browser console.
 *
 * @param day - value for day of the month from suggested source to run test
 * @param month - value for month of the year from suggested source to run test
 * @param year - value for year from suggested source to run test
 * @param valueToCheck - value for name of the day from suggested source to compare with calculated value of the name of the week day
 * @returns {boolean}
 */

export function assert(day, month, year, valueToCheck) {
    const resultValue = DAYS_OF_WEEK[getDayByZellerAlgorythm(day, month, year)]; // Local variable, used to hold calculated value of the week day;
    if (valueToCheck !== resultValue) { // Control structure to output failed result;
        console.log(`${day} day of ${getMonthName(month)} ${year} gave ${resultValue} instead ${valueToCheck}. This is an error`);
        return false; // return statement for automated tests;
    }

    return true; // return statement for automated tests;
}