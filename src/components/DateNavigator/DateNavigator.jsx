import React from 'react';
import PropTypes from 'prop-types';

import { isDebug, debug } from '../../debug';

import './DateNavigator.css';

import { getDateWithChangedDays } from '../../shared/DateHelper';
import DatePickerContainer from '../DatePickerContainer';
import NavButton from '../NavButton';

DateNavigator.propTypes = {
    date:           PropTypes.object.isRequired,
    onChangeDate:   PropTypes.func.isRequired,
};
function DateNavigator({ date, onChangeDate }) {
    const handleDayPlus = () => onChangeDate(getDateWithChangedDays(date, +1));const handleDayMinus = () => onChangeDate(getDateWithChangedDays(date, -1));
    return (
        <div
            className="DateNavigator"
            style={isDebug ? debug.borderStyle : {}}
        >
            <NavButton onClick={handleDayMinus} icon="fa fa-chevron-left" />
            <DatePickerContainer 
                date={date}
                onChangeDate={onChangeDate}
            />
            <NavButton onClick={handleDayPlus} icon="fa fa-chevron-right" />
        </div>
    );
}
export default DateNavigator;