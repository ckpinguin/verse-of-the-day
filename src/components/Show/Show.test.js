import React from 'react';
import ReactDOM from 'react-dom';

import Show from '.';

describe('<Show />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Show><p>Test</p></Show>, div);
    });
});