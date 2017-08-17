import React from 'react';
import PropTypes from 'prop-types';

import './DecButton.css';

import { isDebug, debug } from '../../debug';

DecButton.propTypes = {
    onButtonClicked: PropTypes.func
};
function DecButton({ onButtonClicked }) {
    return (
        <button
            className="DecButton fa fa-arrow-down"
            style={ isDebug ? debug.borderStyle : {} }
            onClick={onButtonClicked}
        />
    );
}
export default DecButton;