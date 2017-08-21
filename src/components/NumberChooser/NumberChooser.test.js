import React from 'react';
import ReactDOM from 'react-dom';

import NumberChooser from './NumberChooser';


describe('<NumberChooser />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const name = 'testName';
        const value = 2017;
        const onChange = () => console.log('onChange called');
        ReactDOM.render(<NumberChooser onChange={onChange} id={name} name={name} value={value} />, div);
    });
});
