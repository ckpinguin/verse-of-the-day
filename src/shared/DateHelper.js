const maxValues = {
    day: 31,
    month: 12,
    year: 2017
};
const minValues = {
    day: 1,
    month: 0,
    year: 2014
};

const randomDateBetween = (start, end) => {
    return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
};

const randomDate = () => {
    return randomDateBetween(
        new Date(
            minValues['year'],
            minValues['month'],
            minValues['day']
        ),
        new Date()
    );
};
    
const getDateObj = (date) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth()+1,
        day: date.getDate()
    };
};

const formatDate = (date, delim='.') => {
    // console.log('formatDate(): ', date);
    return date.getFullYear() + delim + zeroFill(date.getMonth() + 1) // month is 0-based!
            + delim + zeroFill(date.getDate());
};

const getDateWithChangedDays = (date, days) => {
    const dateObj = getDateObj(date);
    return new Date(dateObj.year, dateObj.month-1, dateObj.day+days);
};

const zeroFill = (i) => {
    return (i < 10 ? '0' : '') + i;
};

// exports with _ are private functions exported for testing purposes
// no nice solution yet for that quirk, other solutions are much worse imho
// Beware: With webpack2, module.exports cannot be mixed with any 'import' (ES6-style)!
module.exports = {
    _zeroFill: zeroFill,
    _randomDateBetween: randomDateBetween,
    _minValues: minValues,
    _maxValues: maxValues,
    randomDate: randomDate,
    getDateObj: getDateObj,
    formatDate: formatDate,
    getDateWithChangedDays: getDateWithChangedDays
};
