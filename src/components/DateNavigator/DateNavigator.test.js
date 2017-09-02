import React from 'react';
import ReactDOM from 'react-dom';

import DateNavigator from '.';


describe('<DateNavigator />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const onChangeDate = () => console.log('onChange called');
        ReactDOM.render(<DateNavigator date={new Date()} onChangeDate={onChangeDate} />, div);
    });
});