import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';

import { isDebug, debug } from '../../debug';

import './index.css';

import DateHelper from '../../shared/DateHelper';
import DatePickerContainer from '../DatePickerContainer';
import NavButton from '../NavButton';

Navigator.propTypes = {
    date:           PropTypes.object.isRequired,
    onChangeDate:   PropTypes.func.isRequired, // pass-through
    onChangeDay:    PropTypes.func.isRequired
};
function DateNavigator({ date, onChangeDate }) {
    const changeDay = (days) => {
        // e.preventDefault(); // prevent default for subcomp. NumberChooser (just a hack for now)
        const dateObj = DateHelper.getDateObj(date);
        return new Date(dateObj.year, dateObj.month-1, dateObj.day+days);  
        //this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    };
    const handlers = {
        'dayPlus':     () => onChangeDate(changeDay(+1)),
        'dayMinus':   () => onChangeDate(changeDay(-1))
    };
    return (
        <HotKeys
            handlers={handlers}
            className="Navigator"
            style={isDebug ? debug.borderStyle : {}}
        >
            <NavButton onButtonClicked={() => onChangeDate(changeDay(-1))} icon="fa fa-chevron-left" />
            <DatePickerContainer 
                date={date}
                onChange={onChangeDate}
            />
            <NavButton onButtonClicked={() => onChangeDate(changeDay(+1))} icon="fa fa-chevron-right" />
        </HotKeys>
    );
}
export default DateNavigator;