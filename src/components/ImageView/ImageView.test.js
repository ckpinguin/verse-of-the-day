import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 

import ImageView from '.';

describe('<ImageView />', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ImageView onClick={() => console.log('clicked')}/>, div);
    });
});    