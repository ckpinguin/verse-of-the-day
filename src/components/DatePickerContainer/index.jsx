import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isDebug, debug } from '../../debug';

import NumberChooser from '../NumberChooser';
import { getDateObj } from '../../shared/DateHelper';

const propTypes = {
    date: PropTypes.object.isRequired,
    onChangeDate: PropTypes.func.isRequired
};
class DatePickerContainer extends Component {
    constructor(props) {
        super(props);
        this.dateObj = getDateObj(this.props.date);
        // Handlers:
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // TODO: The comparison needs to be done on year/month/day
        // if (nextProps.date != this.props.date) {
        console.log('DatePickerContainer: receiving props: ', nextProps);
        this.dateObj = getDateObj(nextProps.date);
        console.log('DatePickerContainer: updated this.dateObj: ', this.dateObj);
        //}
    }

    handleYearChange(value) {
        const newDate = new Date(value, this.dateObj.month-1, this.dateObj.day);
        this.dateObj = newDate;
        this.props.onChangeDate(newDate);
    }
    
    handleMonthChange(value) {
        const newDate = new Date(this.dateObj.year, value-1, this.dateObj.day);
        this.props.onChangeDate(newDate);                
    }

    handleDayChange(value) {
        const newDate = new Date(this.dateObj.year, this.dateObj.month-1, value);
        this.props.onChangeDate(newDate);     
    }
    
    handleFieldChange(field) {
        let newDate = null;
        // return curried function
        return (value) => {
            
            switch ( field ) {
            // In any case, correct month -1 (month in Date is 0 based!)
            /** new Date() is automatically converting dates with "overflow"
         * values into valid dates (e.g. day=35 becomes day=4 of the next
         * month)
        */
            case 'year':
                console.log('DatePickerContainer: change for field year ', value);
                newDate = new Date(value, this.dateObj.month-1, this.dateObj.day);
                break;
            case 'month':
                console.log('DatePickerContainer: change for field month ', value);
                newDate = new Date(this.dateObj.year, value-1, this.dateObj.day);
                break;
            case 'day':
                console.log('DatePickerContainer: change for field day ', value);
                newDate = new Date(this.dateObj.year, this.dateObj.month-1, value);
                break;
            default:
                break;
            }
            console.log('DatePickerContainer: calling update with: ', this.dateObj);
            this.props.onChangeDate(newDate);
        };
    }

    render() {
        const { year, month, day } = this.dateObj;
        return (
            <div
                className="DatePicker" style={ isDebug ? debug.borderStyle : {} }>
                {isDebug && <em>DatePicker</em>}     
                <NumberChooser
                    id="year"
                    name="year"
                    value={year}
                    onChange={this.handleYearChange}
                />
                <NumberChooser
                    id="month"
                    name="month"
                    value={month}
                    onChange={this.handleFieldChange('month')}
                />
                <NumberChooser
                    id="day"
                    name="day"
                    value={day}
                    onChange={this.handleDayChange}
                />
            </div>
        );
    }
}

DatePickerContainer.propTypes = propTypes;

export default DatePickerContainer;