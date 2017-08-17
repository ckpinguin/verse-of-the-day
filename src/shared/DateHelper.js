const DateHelper = {

    maxValues: {
        day: 31,
        month: 12,
        year: 2017
    },
    minValues: {
        day: 1,
        month: 0,
        year: 2014
    },

    randomDateBetween: (start, end) => {
        return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
    },

    randomDate: () => {
        return DateHelper.randomDateBetween(new Date(
            DateHelper.minValues['year'],
            DateHelper.minValues['month'],
            DateHelper.minValues['day']
        ),
        new Date());
    },
    
    getDateObj: (date) => {
        return {
            year: date.getFullYear(),
            month: date.getMonth()+1,
            day: date.getDate()
        };
    },

    formatDate: (date, delim='.') => {
        // console.log('formatDate(): ', date);
        return date.getFullYear() + delim + DateHelper.zeroFill(date.getMonth() + 1) // month is 0-based!
            + delim + DateHelper.zeroFill(date.getDate());
    },

    zeroFill: (i) => {
        return (i < 10 ? '0' : '') + i;
    }
};
export default DateHelper;