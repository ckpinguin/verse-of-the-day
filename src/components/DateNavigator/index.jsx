import React from 'react';
import PropTypes from 'prop-types';

import { isDebug, debug } from '../../debug';

import './index.css';

import DateHelper from '../../shared/DateHelper';
import DatePickerContainer from '../DatePickerContainer';
import NavButton from '../NavButton';

Navigator.propTypes = {
    date:           PropTypes.object.isRequired,
    onChangeDate:   PropTypes.func.isRequired,
};
function DateNavigator({ date, onChangeDate }) {
    const handlers = {
        'dayPlus':     () => onChangeDate(DateHelper.getDateWithChangedDays(date, +1)),
        'dayMinus':   () => onChangeDate(DateHelper.getDateWithChangedDays(date, -1))
    };
    return (
        <div
            className="Navigator"
            style={isDebug ? debug.borderStyle : {}}
        >
            <NavButton onButtonClicked={handlers.dayMinus} icon="fa fa-chevron-left" />
            <DatePickerContainer 
                date={date}
                onChangeDate={onChangeDate}
            />
            <NavButton onButtonClicked={handlers.dayPlus} icon="fa fa-chevron-right" />
        </div>
    );
}
export default DateNavigator;