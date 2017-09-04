import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme'; 
import renderer from 'react-test-renderer';

import App from './App';
import { ImageView, DateNavigator, Title } from './components';
import PreCacheImg from './shared';

// Mock 3rd-party-library (used as HOC)
jest.mock('react-hotkeys', () => {
    return {
        HotKeys: 'hotkeys'
    };
});

describe('App', () => {
    let props;
    let mountedApp;
    let shallowApp;
    const app = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <App {...props} />
            );
        }
        return mountedApp;
    };
    const appShallow = () => {
        if (!shallowApp) {
            shallowApp = shallow(
                <App {...props} />
            );
        }
        return shallowApp;
    };
    
    beforeEach(() => {
        props = {
            date: new Date(2017, 5, 12)
        };
        mountedApp = undefined;
        shallowApp = undefined;
    });

    it('calls componentDidMount (just for example)', () => {
        App.prototype.componentDidMount = jest.fn();
        app();
        // const instance = wrapper.instance();
        expect(App.prototype.componentDidMount).toHaveBeenCalled();
    });

    it('renders shallow', () => {
        appShallow();
        // expect(wrapper.contains(welcome)).toEqual(true);
        // simpler version for this:
        // expect(wrapper).toContainReact(welcome);
    });

    it('renders without crashing', () => {
        ReactTestUtils.renderIntoDocument(<App {...props} />);
    });    

    it('mounts successfully (full DOM rendering)', () => {
        app();
    });

    it('always renders 4 top-level divs', () => {
        const divs = appShallow().find('div'); // shallow goes only 1 level deep
        expect(divs.length).toBe(4);
    });

    it('always renders `.App-Title` div', () => {
        const div = app().find('div .App-Title');
        expect(div.length).toBe(1);
    });
    describe('the rendered `.App-Title` div', () => {
        const div = () => app().find('div .App-Title');

        it('contains everything else that gets rendered', () => {  
            // const div = app().find('div .App-Title'); // This hangs!
            const div = appShallow().find('div .App-Title');            
            
            // When using .find, enzyme arranges the nodes in order such
            // that the outermost node is first in the list. So we can
            // use .first() to get the outermost div.
            const wrappingDiv = div.find('div .App-Title').first();
            // console.log(divs.first().debug());
            // console.log(appShallow().childAt(1).debug());
            // Enzyme omits the outermost node when using the .children()
            // method on app(). This is annoying, but we can use it
            // to verify that wrappingDiv contains everything else this
            // component renders.
            expect(wrappingDiv).toEqual(appShallow().childAt(0));
        });
        it('always renders a `Title`', () => {
            expect(div().find(Title).length).toBe(1);
        });
        it('`Title` receives `title` prop', () => {
            const title = (div().find(Title));
            expect(Object.keys(title.props()).length).toBe(1);
            expect(title.props().value).toBe('Our daily bread');
        });
    });

    it('always renders `.App-Main div`', () => {
        const div = app().find('div .App-Main');
        expect(div.length).toBe(1);
    });
    describe('the rendered `.App-Main` div', () => {
        const div = () => app().find('div .App-Main');
        
        it('contains everything else that gets rendered', () => {
            const div = appShallow().find('div .App-Main');
            const wrappingDiv = div.first();
            expect(wrappingDiv).toEqual(appShallow().childAt(1));
        });
        it('always renders a `ImageView`', () => {
            expect(div().find(ImageView).length).toBe(1);
        });
    });

    it('always renders `.App-Handle` div', () => {
        const div = app().find('div .App-Handle');
        expect(div.length).toBe(1);
    });
    describe('the rendered `.App-Handle` div', () => {
        const div = () => app().find('div .App-Handle');

        it('contains everything else that gets rendered', () => {
            const div = appShallow().find('div .App-Handle');
            const wrappingDiv = div.first();
            expect(wrappingDiv).toEqual(appShallow().childAt(2));
        });
        it('always renders a `DateNavigator`', () => {
            expect(div().find(DateNavigator).length).toBe(1);
        });
        it('`DateNavigator` receives 2 props', () => {
            const dateNav = (div().find(DateNavigator));
            expect(Object.keys(dateNav.props()).length).toBe(2);
        });
        it('`DateNavigator` receives `date` prop', () => {
            const dateNav = (div().find(DateNavigator));
            expect(dateNav.props().date).toBe(props.date);
        });
        it('`DateNavigator` receives `onChangeDate` prop', () => {
            const dateNav = (div().find(DateNavigator));
            expect(dateNav.props().onChangeDate).toBeDefined;
            expect(dateNav.props().onChangeDate).toBe(App.propTypes.updateDate);
            
        });
    });

    it('always renders `.App-Footer` div', () => {
        const divs = app().find('div .App-Footer');
        expect(divs.length).toBe(1);
    });
    describe('the rendered `.App-Footer` div', () => {
        const div = () => app().find('div .App-Footer');
        
        it('contains everything else that gets rendered', () => {
            const div = appShallow().find('div .App-Footer');
            const wrappingDiv = div.first();            
            expect(wrappingDiv).toEqual(appShallow().childAt(3));
        });
    });

    it('did not change UI compared to recorded snapshot', () => {
        const component = renderer.create(<App {...props} />);
        // component.state = { date: new Date(2017, 7, 1) };
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
