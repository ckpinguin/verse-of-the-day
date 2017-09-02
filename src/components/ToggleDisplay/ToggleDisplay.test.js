import React from 'react';
import ReactDOM from 'react-dom';

import ToggleDisplay from '.';
import Dummy from './Dummy';

describe('<ToggleDisplay />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToggleDisplay><Dummy /></ToggleDisplay>, div);
    });
});