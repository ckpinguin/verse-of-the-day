import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

NavButton.propTypes = {
    icon: PropTypes.string,
    onButtonClicked: PropTypes.func.isRequired
};
NavButton.defaultProps = {
    icon: 'fa fa-question'
};
function NavButton({ icon, onButtonClicked }) {
    return (
        <button
            className={`NavButton ${icon}`}
            style={ isDebug ? debug.borderStyle : {} }
            onClick={onButtonClicked}
        />
    );
}
export default NavButton;