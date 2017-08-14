import React from 'react';
import ReactDOM from 'react-dom';

import NumberChooser from './NumberChooser';


describe('<NumberChooser />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NumberChooser />, div);
    });
});
