import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
import renderer from 'react-test-renderer';

import App from './App';
import Title from './components/Title/Title';

describe('<App />', () => {
    it('calls componentDidMount (just for example)', () => {
        App.prototype.componentDidMount = jest.fn();
        const wrapper = mount(<App />);
        // const instance = wrapper.instance();
        expect(App.prototype.componentDidMount).toHaveBeenCalled();
    });
    it('renders shallow', () => {
        const wrapper = shallow(<App />);
        const welcome = <Title value="Our daily bread"/>;
        // expect(wrapper.contains(welcome)).toEqual(true);
        // simpler version for this:
        expect(wrapper).toContainReact(welcome);
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        //ReactDOM.render(<App />, div);
        ReactTestUtils.renderIntoDocument(<App/>);
    });    
    it('mounts successfully', () => {
        const wrapper = mount(<App />);
        const welcome = <h2>Our daily bread</h2>;        
        expect(wrapper).toContainReact(welcome);
    });
    it('did not change UI compared to recorded snapshot', () => {
        const date = new Date(2017, 7, 1);
        const component = renderer.create(<App date={date}/>);
        // component.state = { date: new Date(2017, 7, 1) };
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
