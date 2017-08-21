import React from 'react';
import PropTypes from 'prop-types';

import './IncButton.css';

import { isDebug, debug } from '../../debug';

IncButton.propTypes = {
    onButtonClicked: PropTypes.func
};
function IncButton({ onButtonClicked }) {
    return (
        <button
            className="IncButton fa fa-arrow-up"
            style={ isDebug ? debug.borderStyle : {} }
            onClick={onButtonClicked}
        />
    );
}
export default IncButton;