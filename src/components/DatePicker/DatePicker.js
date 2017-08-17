import React from 'react';
import PropTypes from 'prop-types';

import './DatePicker.css';

import { isDebug, debug } from '../../debug';

import NumberChooser from '../NumberChooser/NumberChooser';

DatePicker.propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
};

function DatePicker({ year, month, day, onFieldChange }) {
    return (
        <div className="DatePicker" style={ isDebug ? debug.borderStyle : {} }>
            {isDebug && <em>DatePicker</em>}        
            <NumberChooser
                id="year"
                name="year"
                value={year}
                onChange={(val) => onFieldChange('year', val)}
            />
            <NumberChooser
                id="month"
                name="month"
                value={month}
                onChange={(val) => onFieldChange('month', val)}
            />
            <NumberChooser
                id="day"
                name="day"
                value={day}
                onChange={(val) => onFieldChange('day', val)}
            />
        </div>
    );
}
export default DatePicker;

