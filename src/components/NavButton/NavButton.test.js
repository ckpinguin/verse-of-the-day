import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
// import renderer from 'react-test-renderer';

import NavButton from '.';

describe('NavButton', () => {

    let props;
    let mountedNavButton;
    const onClick=() => {};
    const navButtonJSX = <NavButton {...props} />;
    const navButton = () => {
        if (!mountedNavButton) {
            mountedNavButton = mount(
                navButtonJSX
            );
        }
        return mountedNavButton;
    };
    const shallowRender = (props) => shallow(navButtonJSX);
    
    beforeEach(() => {
        props = {
            onClick: onClick,
            icon: 'fa fa-arrow-up'
        };
        mountedNavButton = undefined;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            navButtonJSX, div);
    });

    it('renders shallow', () => {
        shallowRender(props);
    });

    /** Just an example, normally props should not be tested, as they
        are already covered by PropTypes. */
    /*     it('allows us to set props', () => {
        const onClick = () => console.log('onClick() fired');
        const wrapper = mount(
            <NavButton
                onClick={onClick}
                propOne="foo"
            />);
        expect(wrapper.props().propOne).toEqual('foo');
        wrapper.setProps({ propOne: 'bonka' });
        expect(wrapper.props().propOne).toEqual('bonka');
    }); */

    it('always renders a div', () => {
        const renderedTag = navButton().find('NavButton');
        expect(renderedTag.length).toBe(1);
    });

/*     it('handles click events', () => {
        NavButton.prototype.onClick = jest.fn();    
        const mockClick = NavButton.prototype.onClick;
        const wrapper = mount((
            navButtonJSX
        ));
        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    }); */

});