import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 

import Title from './Title';

describe('<Title />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Title value="title"/>, div);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<Title value="title" />);
        expect(wrapper.props().value).toEqual('title');
        wrapper.setProps({ value: 'bonka' });
        expect(wrapper.props().value).toEqual('bonka');
    });
});