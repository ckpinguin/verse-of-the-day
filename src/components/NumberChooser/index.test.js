import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import NumberChooser from '.';


describe('<NumberChooser />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const name = 'testyear';
        const value = 2017;
        const onChange = () => console.log('onChange called');
        ReactDOM.render(
            <NumberChooser
                onChange={onChange}
                id={name}
                name={name}
                value={value}
            />, div);
    });

    it('allows us to set props', () => {
        const name = 'testday';
        const value = 11;
        const onChange = () => console.log('onChange called');
        const wrapper = mount((
            <NumberChooser
                onChange={onChange}
                id={name}
                name={name}
                value={value}
            />
        ));
        expect(wrapper.props().name).toEqual('testday');
        wrapper.setProps({ value: 12 });
        expect(wrapper.props().value).toEqual(12);
    });

/*     it('onUpClick can be called', () => {
        // const div = document.createElement('div');
        const name = 'testday';
        const value = 11;
        const onChange = () => console.log('onChange called');
        // ReactDOM.render(
            <NumberChooser
                onChange={onChange}
                id={name}
                name={name}
                value={value}
            />, div);
        NumberChooser.prototype.onUpClick = jest.fn();    
        const mockClick = NumberChooser.prototype.onUpClick;
        const wrapper = mount((
            <NumberChooser
                onChange={onChange}
                id={name}
                name={name}
                value={value}
            />
        ));
        wrapper.find('NavButton').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    }); */
});
