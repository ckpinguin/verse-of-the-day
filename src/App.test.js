import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders shallow', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Our daily bread</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper).toContainReact(welcome);
    return false;
});
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});


