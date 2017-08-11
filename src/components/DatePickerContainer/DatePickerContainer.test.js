import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerContainer from './DatePickerContainer';
import DateHelper from '../../shared/DateHelper';

describe('DatePickerContainer', () => {
    it('renders without crashing', () => {
        const date = DateHelper.randomDate();
        const div = document.createElement('div');
        ReactDOM.render(<DatePickerContainer date={date}/>, div);
    });
});
