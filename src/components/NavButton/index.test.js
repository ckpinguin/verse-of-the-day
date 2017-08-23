import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
// import renderer from 'react-test-renderer';

import DecButton from '.';

describe('<DecButton />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DecButton onClick={() => {}}/>, div);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<DecButton propOne="foo" />);
        expect(wrapper.props().propOne).toEqual('foo');
        wrapper.setProps({ propOne: 'bonka' });
        expect(wrapper.props().propOne).toEqual('bonka');
    });

    it('simulates click events', () => {
        DecButton.prototype.onButtonClicked = jest.fn();    
        const mockClick = DecButton.prototype.onButtonClicked;
        const wrapper = mount((
            <DecButton onButtonClicked={mockClick} />
        ));
        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    });
});