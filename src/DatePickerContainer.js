import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from './DatePicker';
import DateHelper from './DateHelper';

class DatePickerContainer extends Component {
    constructor(props) {
        super(props);
        this.date = props.date;
    }
    onChanges = (changes) => {
        const formattedDate = DateHelper.formatDate(this.date, '-');
        const parts = formattedDate.split('-');
        if (parts.length === 3) {
            this.formDate = {
                year: Math.min(parseInt(parts[0], 10), DateHelper.maxValues.year),
                month: Math.min(parseInt(parts[1], 10), DateHelper.maxValues.month),
                day: Math.min(parseInt(parts[2], 10), DateHelper.maxValues.day)
            };
        }
    }

    incrementField = (field) => {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.formDate[field] = (this.formDate[field] + 1 > maxValue)
            ? minValue
            : this.formDate[field] + 1;
        this.emitDateChange();
    }

    decrementField = (field) => {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.formDate[field] = (this.formDate[field] - 1 < minValue)
            ? maxValue
            : this.formDate[field] - 1;
        this.emitDateChange();
    }

    reset = () => {
        this.formDate = {
            year: DateHelper.minValues['year'],
            month: DateHelper.minValues['month'],
            day: DateHelper.minValues['day']
        };
        this.emitDateChange();
    }

    emitDateChange = () => {
        // const date = new Date(this.formDate.year, this.formDate.month - 1, this.formDate.day);
        // console.log('emitting dateChange with: ', date);
        // this.dateChange.emit(date);
    }

    changeDate = (field, inputValue) => {
        let value = Math.max(inputValue, 0);
        value = Math.min(value, DateHelper.maxValues[field]);
        // console.log('changing ', field, ' to: ', value);
        this.formDate[field] = value;
        // this.emitDateChange();
    }

    render = () => {
        const dateObj = DateHelper.getDateObj(this.date);
        return (
            <div>
                <DatePicker year={dateObj.year} month={dateObj.month} day={dateObj.day}/>
            </div>
        );
    }

}
export default DatePickerContainer;

DatePicker.propTypes = {
    date: PropTypes.object
};