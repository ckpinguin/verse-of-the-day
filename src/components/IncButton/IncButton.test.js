import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 

import IncButton from './IncButton';

describe('<IncButton />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IncButton onClick={() => {}}/>, div);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<IncButton propOne="foo" />);
        expect(wrapper.props().propOne).toEqual('foo');
        wrapper.setProps({ propOne: 'bonka' });
        expect(wrapper.props().propOne).toEqual('bonka');
    });

    it('simulates click events', () => {
        IncButton.prototype.onClick = jest.fn();    
        const onClick = IncButton.prototype.onClick;
        const wrapper = mount((
            <IncButton onClick={onClick} />
        ));
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});