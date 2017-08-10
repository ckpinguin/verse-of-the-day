import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 

import App from './App';

describe('<App />', () => {
    it('calls componentDidMount (just for example)', () => {
        App.prototype.componentDidMount = jest.fn();
        const wrapper = mount(<App />);
        // const instance = wrapper.instance();
        expect(App.prototype.componentDidMount).toHaveBeenCalled();
    });
    it('renders shallow', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Our daily bread</h2>;
        // expect(wrapper.contains(welcome)).toEqual(true);
        // simpler version for this:
        expect(wrapper).toContainReact(welcome);
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });    
});
