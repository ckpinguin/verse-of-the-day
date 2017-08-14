import React from 'react';
import ReactDOM from 'react-dom';

import ToggleDisplay from './ToggleDisplay';

describe('<ToggleDisplay />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToggleDisplay />, div);
    });
});