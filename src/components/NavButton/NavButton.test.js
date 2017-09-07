import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
import renderer from 'react-test-renderer';

import NavButton from '.';

describe('<NavButton />'    , () => {
    let props;
    let mountedNavButton;
    let shallowNavButton;
    const onClick = jest.fn();    
    const navButton = () => {
        if (!mountedNavButton) {
            mountedNavButton = mount(
                <NavButton {...props} />
            );
        }
        return mountedNavButton;
    };
    const navButtonShallow = () => {
        if (!shallowNavButton) {
            shallowNavButton = shallow(
                <NavButton {...props} />
            );
        }
        return shallowNavButton;
    };
        
    beforeEach(() => {
        // App = require('./App').default;        
        props = {
            icon: 'fa fa-question',
            onClick: onClick
        };
        mountedNavButton = undefined;
        shallowNavButton = undefined;
    });
    
    it('renders without crashing', () => {
        ReactTestUtils.renderIntoDocument(<NavButton {...props} />);
    });

    it('renders shallow', () => {
        navButtonShallow();
    });

    it('mounts successfully (full DOM rendering)', () => {
        navButton();
    });

    it('allows us to set props', () => {
        const wrapper = navButton();
        expect(wrapper.props().icon).toEqual('fa fa-question');
        wrapper.setProps({ icon: 'bonka' });
        expect(wrapper.props().icon).toEqual('bonka');
    });

    it('always renders exactly one div', () => {
        const divs = navButtonShallow().find('div'); // shallow goes only 1 level deep
        expect(divs.length).toBe(1);
    });

    it('outputs the correct className for the div', () => {
        const div = navButtonShallow().find('div');
        expect(div.node.props.className).toBe('NavButton fa fa-question');
    });

    it('did not change UI compared to recorded snapshot', () => {
        const component = renderer.create(<NavButton {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});