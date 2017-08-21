import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isDebug, debug } from '../../debug';

import NumberChooser from '../NumberChooser/NumberChooser';
import DateHelper from '../../shared/DateHelper';

class DatePickerContainer extends Component {
    static propTypes = {
        date: PropTypes.object,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.dateObj = DateHelper.getDateObj(this.props.date);
    }

    componentWillReceiveProps(nextProps) {
        console.log('receiving props: ', nextProps);
        this.dateObj = DateHelper.getDateObj(nextProps.date);
    }

    render = () => {
        const { year, month, day } = this.dateObj;
        return (
            <div className="DatePicker" style={ isDebug ? debug.borderStyle : {} }>
                {isDebug && <em>DatePicker</em>}        
                <NumberChooser
                    id="year"
                    name="year"
                    value={year}
                    onChange={(val) => this._handleChangeForField('year', val)}
                />
                <NumberChooser
                    id="month"
                    name="month"
                    value={month}
                    onChange={(val) => this._handleChangeForField('month', val)}
                />
                <NumberChooser
                    id="day"
                    name="day"
                    value={day}
                    onChange={(val) => this._handleChangeForField('day', val)}
                />
            </div>
        );
    }

    _handleChangeForField = (field, value) => {
        const dateObj = DateHelper.getDateObj(this.props.date);
        // let value = Math.max(newValue, 0) % DateHelper.maxValues[field];
        // value = Math.min(value, DateHelper.maxValues[field]);
        let newDate = null;
        switch ( field ) {
        // In any case, correct month -1 (month in Date is 0 based!)
        /** new Date() is automatically converting dates with "overflow"
         * values into valid dates (e.g. day=35 becomes day=4 of the next
         * month)
        */
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