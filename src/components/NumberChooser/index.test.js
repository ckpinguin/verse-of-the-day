import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import NumberChooser from '.';


describe('<NumberChooser />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const name = 'testName';
        const value = 2017;
        const onChange = () => console.log('onChange called');
        ReactDOM.render(<NumberChooser onChange={onChange} id={name} name={name} value={value} />, div);
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
