import React from 'react';
import PropTypes from 'prop-types';

import './DatePicker.css';

import debug from '../../debug';

import NumberChooser from '../NumberChooser/NumberChooser';

DatePicker.propTypes = {
    onChange: PropTypes.func,
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number
};
function DatePicker({ year, month, day, onChange }) {
    return (
        <div id="DatePicker" className="layout" style={{ background: debug && 'burlywood'}}>
            {debug && <em>DatePicker</em>}        
            <NumberChooser name="year" value={year} onChange={onChange} />
            <NumberChooser name="month" value={month} onChange={onChange} />
            <NumberChooser name="day" value={day} onChange={onChange} />
        </div>
    );
}
export default DatePicker;

