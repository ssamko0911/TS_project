/**
 * Source:
 * https://en.wikipedia.org/wiki/Zeller%27s_congruence
 * Implementations in software > Common simplification > For the Gregorian calendar
 *
 * NOTE: In this algorithm January and February are
 *       counted as months 13 and 14 of the previous
 *       year.E.g. if it is 2 February 2010, the
 *       algorithm counts the date as the second day
 *       of the fourteenth month (month += 12) of
 *       2009 (year -= 1);
 *
 * @param day
 * @param month
 * @param year
 * @returns {number}
 */
export function getDayByZellerAlgorythm(day, month, year) {
    if (month < 3) {
        month += 12;
        year -= 1;
    }
    return (day + parseInt(((month + 1) * 13) / 5) + year + parseInt(year / 4) - parseInt(year / 100) + parseInt(year / 400)) % 7;
}