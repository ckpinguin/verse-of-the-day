import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toggling the display for any HTML-Tags.
 * This component was copied deliberately from https://github.com/ccnokes/react-toggle-display
 */
ToggleDisplay.propTypes = {
    hide:   PropTypes.bool,
    show:   PropTypes.bool,
    if:     PropTypes.bool
};
ToggleDisplay.defaultProps = {
    hide:   false,
    show:   true,
    if:     true
};
function ToggleDisplay(props) {
    if (props.if === false) {
        return null;
    }

    const style = {};
    if(shouldHide(props)) {
        style.display = 'none';
    }

    // prevent our props from being leaked down onto the children
    const newProps = pickProps(props);
    return React.cloneElement(props.children, { newProps, style: style });
    
}
export default ToggleDisplay;

const isDefined = (val) => val != null;

const shouldHide = (props) => {
    if (isDefined(props.show)) {
        return !props.show;
    } else if (isDefined(props.hide)) {
        return props.hide;
    }
    return false;
};

const pickProps = (props) => {
    const newProps = Object.assign({}, props);
    propsToRemove.forEach(prop => {
        if(prop in newProps) {
            delete newProps[prop];
        }
    });
    return newProps;
};
// used props to remove in order to prevent our 
// props from being leaked down onto the children
const propsToRemove = Object.keys(ToggleDisplay.propTypes);