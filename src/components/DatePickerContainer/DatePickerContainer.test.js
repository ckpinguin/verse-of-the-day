import React from 'react';
import ReactDOM from 'react-dom';

import DatePickerContainer from './DatePickerContainer';
import DateHelper from '../../shared/DateHelper';

describe('<DatePickerContainer />', () => {
    it('renders without crashing', () => {
        const date = DateHelper.randomDate();
        const div = document.createElement('div');
        const onChange = () => console.log('onChange called');
        ReactDOM.render(<DatePickerContainer onChange={onChange} date={date}/>, div);
    });
});
