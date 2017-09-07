import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
import renderer from 'react-test-renderer';

import Title from '.';

describe('<Title />', () => {
    let props;
    let mountedTitle;
    let shallowTitle;
    const title = () => {
        if (!mountedTitle) {
            mountedTitle = mount(
                <Title {...props} />
            );
        }
        return mountedTitle;
    };
    const titleShallow = () => {
        if (!shallowTitle) {
            shallowTitle = shallow(
                <Title {...props} />
            );
        }
        return shallowTitle;
    };
        
    beforeEach(() => {
        // App = require('./App').default;        
        props = {
            value: 'Our daily bread'
        };
        mountedTitle = undefined;
        shallowTitle = undefined;
    });
    
    it('renders without crashing', () => {
        ReactTestUtils.renderIntoDocument(<Title {...props} />);
    });

    it('renders shallow', () => {
        titleShallow();
    });

    it('mounts successfully (full DOM rendering)', () => {
        title();
    });

    it('allows us to set props', () => {
        const wrapper = title();
        expect(wrapper.props().value).toEqual('Our daily bread');
        wrapper.setProps({ value: 'bonka' });
        expect(wrapper.props().value).toEqual('bonka');
    });

    it('always renders exactly one div', () => {
        const divs = titleShallow().find('div'); // shallow goes only 1 level deep
        expect(divs.length).toBe(1);
    });

    it('did not change UI compared to recorded snapshot', () => {
        const component = renderer.create(<Title {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});