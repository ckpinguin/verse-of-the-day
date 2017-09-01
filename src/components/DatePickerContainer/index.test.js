import React from 'react';
import ReactDOM from 'react-dom';

import DatePickerContainer from '.';
import DateHelper from '../../shared/DateHelper';

describe('<DatePickerContainer />', () => {
    it('renders without crashing', () => {

        const date = DateHelper.randomDate();
        const div = document.createElement('div');
        const onChangeDate = () => console.log('onChangeDate() fired');
        ReactDOM.render(
            <DatePickerContainer
                onChangeDate={onChangeDate}
                date={date}
            />, div);   
    });
});
