import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
// import renderer from 'react-test-renderer';

import DecButton from './DecButton';

describe('<DecButton />', () => {
    it('renders without crashing', () => {
        const onClick = jest.fn(() => console.log('clicked!')); 
        const div = document.createElement('div');
        ReactDOM.render(<DecButton onClick={onClick}/>, div);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<DecButton propOne="foo" />);
        expect(wrapper.props().propOne).to.equal('foo');
        wrapper.setProps({ propOne: 'bonka' });
        expect(wrapper.props().propOne).to.equal('bonka');
    });

    it('simulates click events', () => {
        const onClick = jest.fn(() => console.log('clicked!'));       
        const wrapper = mount((
            <DecButton onClick={onClick} />
        ));
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });
});