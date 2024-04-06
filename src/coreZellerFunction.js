/**
 * Written by: Serhii Samko
 * Date Started: 06/04/2024
 *
 * Core function to perform calculation of the number of week day.
 *
 * Source:
 * https://en.wikipedia.org/wiki/Zeller%27s_congruence
 * Implementations in software > Common simplification > For the Gregorian calendar
 *
 * NOTE: In this algorithm January and February (if (month < 3)) are
 *       counted as months 13 and 14 of the previous
 *       year.E.g. if it is 2 February 2024, the
 *       algorithm counts the date as the second day
 *       of the fourteenth month (month += 12) of
 *       2023 (year -= 1);
 *
 * @param day
 * @param month
 * @param year
 * @returns {number}
 */
export function getDayByZellerAlgorythm(day, month, year) {
    if (month < 3) { // Control structure to prepare proper values for later calculation;
        month += 12; // Changed value for month according Zeller's congruence documentation;
        year -= 1; // Changed value for year according Zeller's congruence documentation;
    }
    return (day + parseInt((13 * (month + 1)) / 5) + year + parseInt(year / 4) - parseInt(year / 100) + parseInt(year / 400)) % 7; // Return number of the day of week;
}