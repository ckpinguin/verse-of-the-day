import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toggling the display for any HTML-Tags.
 * This component was copied deliberately from https://github.com/ccnokes/react-toggle-display
 */

ToggleDisplay.propTypes = {
	tag: PropTypes.string,
	hide: PropTypes.bool,
	show: PropTypes.bool,
	if: PropTypes.bool
}

ToggleDisplay.defaultProps = {
	tag: 'span'
};

// used props to remove in order to prevent our 
// props from being leaked down onto the children
const propsToRemove = Object.keys(ToggleDisplay.propTypes);

function isDefined(val) {
	return val != null;
}

function shouldHide(props) {
	if (isDefined(props.show)) {
		return !props.show;
	}
	else if (isDefined(props.hide)) {
		return props.hide;
	}
	return false;
}

function pickProps(props) {
	const newProps = Object.assign({}, props);
	propsToRemove.forEach(prop => {
		if(prop in newProps) {
			delete newProps[prop];
		}
	});
	return newProps;
}

export default function ToggleDisplay(props) {
	if (props.if === false) {
		return null;
	}

	let style = {};
	if(shouldHide(props)) {
		style.display = 'none';
	}

	const Tag = props.tag;
	// prevent our props from being leaked down onto the children
	const newProps = pickProps(props);

	return (
		<Tag style={style} {...newProps} />
	);
}