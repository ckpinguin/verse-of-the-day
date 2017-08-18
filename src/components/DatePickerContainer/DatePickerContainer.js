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
    constructor(props) {
        super(props);
        this.dateObj = DateHelper.getDateObj(this.props.date);
    }

    componentWillReceiveProps(nextProps) {
        console.log('receiving props: ', nextProps);
        this.dateObj = DateHelper.getDateObj(nextProps.date);
    }
    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate? ', nextProps);
        return true;
    }

    render = () => {
        return (
            <DatePicker
                year={this.dateObj.year}
                month={this.dateObj.month}
                day={this.dateObj.day}
                onFieldChange={(field, newValue) => this.handleChangeForField(field, newValue)}
            />
        );
    }

    handleChangeForField = (field, newValue) => {
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