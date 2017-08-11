import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = (props) => {
    const { year, month, day } = props;
    return (
        <p>This is DatePicker stub with date: {`${day}.${month}.${year}`}</p>
    );
};
export default DatePicker;

DatePicker.propTypes = {
    onChange: PropTypes.func,
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number
}