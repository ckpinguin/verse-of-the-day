import React from 'react';
import PropTypes from 'prop-types';

import './DatePicker.css';

import NumberChooser from '../NumberChooser/NumberChooser';

DatePicker.propTypes = {
    onChange: PropTypes.func,
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number
};
function DatePicker({ year, month, day, onChange }) {
    return (
        <div id="DatePicker">
            <p>This is DatePicker stub with date: {`${day}.${month}.${year}`}</p>
            <NumberChooser name="year" onChange={onChange} />
        </div>
    );
}
export default DatePicker;

