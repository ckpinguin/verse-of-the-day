import React from 'react';
import ReactDOM from 'react-dom';

import Navigator from '.';


describe('<Navigator />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const onChange = () => console.log('onChange called');
        ReactDOM.render(<Navigator date={new Date()} onChange={onChange} />, div);
    });
});