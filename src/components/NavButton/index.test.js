import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
// import renderer from 'react-test-renderer';

import NavButton from '.';

describe('<NavButton />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NavButton
                onClick={() => {}}
            />, div);
    });

    it('allows us to set props', () => {
        const onClick = () => console.log('onClick() fired');
        const wrapper = mount(
            <NavButton
                onClick={onClick}
                propOne="foo"
            />);
        expect(wrapper.props().propOne).toEqual('foo');
        wrapper.setProps({ propOne: 'bonka' });
        expect(wrapper.props().propOne).toEqual('bonka');
    });

    it('simulates click events', () => {
        NavButton.prototype.onClick = jest.fn();    
        const mockClick = NavButton.prototype.onClick;
        const wrapper = mount((
            <NavButton
                onClick={mockClick}
                icon="fa fa-arrow-up"
            />
        ));
        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    });
});