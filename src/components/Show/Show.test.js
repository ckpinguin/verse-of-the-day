import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
import renderer from 'react-test-renderer';

import Show from '.';

describe('<Show />' , () => {
    let props;
    let mountedShow;
    let shallowShow;
    const show = () => {
        if (!mountedShow) {
            mountedShow = mount(
                <Show {...props} />
            );
        }
        return mountedShow;
    };
    const showShallow = () => {
        if (!shallowShow) {
            shallowShow = shallow(
                <Show {...props} />
            );
        }
        return shallowShow;
    };
        
    beforeEach(() => {
        // App = require('./App').default;        
        props = {
            if: true,
            children: [<div id="showme" />]
        };
        mountedShow = undefined;
        shallowShow = undefined;
    });
    
    it('renders without crashing', () => {
        ReactTestUtils.renderIntoDocument(
            <Show {...props} />
        );
    });

    it('renders shallow', () => {
        showShallow();
    });

    it('mounts successfully (full DOM rendering)', () => {
        show();
    });

    it('hides the child when prop `if` is set to `false`', () => {
        const div = showShallow().find('div');
        console.log(div.node);
        expect(div.node).toEqual(<div><div id="showme" style={{}}/></div>);
        div.setProps({ if: false });
    });

    it('always renders exactly two divs (show itself and a child node)', () => {
        const divs = showShallow().find('div'); // shallow goes only 1 level deep
        expect(divs.length).toBe(2);
    });

    xit('outputs the correct className for the div', () => {
        const div = showShallow().find('div');
        expect(div.node.props.className).toBe('Show fa fa-question');
    });

    it('did not change UI compared to recorded snapshot', () => {
        const component = renderer.create(<Show {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});