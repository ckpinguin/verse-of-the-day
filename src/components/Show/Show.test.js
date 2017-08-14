import React from 'react';
import ReactDOM from 'react-dom';

import Show from './Show';

describe('<Show />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Show />, div);
    });
});