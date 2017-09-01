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
    const dateObj = DateHelper.getDateObj(date);
    return new Date(dateObj.year, dateObj.month-1, dateObj.day+days);
};

const zeroFill = (i) => {
    return (i < 10 ? '0' : '') + i;
};

const DateHelper = {
    maxValues,
    minValues,
    randomDateBetween,
    randomDate,
    getDateObj,
    formatDate,
    getDateWithChangedDays
};
export default DateHelper;