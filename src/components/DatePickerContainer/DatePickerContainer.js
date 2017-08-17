import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { isDebug, debug } from '../../debug';

import DatePicker from '../DatePicker/DatePicker';
import DateHelper from '../../shared/DateHelper';

class DatePickerContainer extends Component {
    static propTypes = {
        date: PropTypes.object,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const dateObj = DateHelper.getDateObj(this.props.date);
        return (
            <DatePicker
                year={dateObj.year}
                month={dateObj.month}
                day={dateObj.day}
                onFieldChange={(field, newValue) => this.handleChangeForField(field, newValue)}
            />
        );
    }

    handleChangeForField(field, newValue) {
        const dateObj = DateHelper.getDateObj(this.props.date);
        let value = newValue;
        // let value = Math.max(newValue, 0) % DateHelper.maxValues[field];
        // value = Math.min(value, DateHelper.maxValues[field]);
        let newDate = null;
        switch ( field ) {
        // In any case, correct month -1 (month in Date is 0 based!)
        case 'year':
            newDate = new Date(value, dateObj.month-1, dateObj.day);
            break;
        case 'month':
            newDate = new Date(dateObj.year, value-1, dateObj.day);
            break;
        case 'day':
            newDate = new Date(dateObj.year, dateObj.month-1, value);
            break;
        default:
            break;
        }
        this.props.onChange(newDate);
    }

}
export default DatePickerContainer;