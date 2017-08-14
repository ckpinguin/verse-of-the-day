import React from 'react';
import ReactDOM from 'react-dom';
import IncButton from './IncButton';

describe('<IncButton />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IncButton />, div);
    });
});