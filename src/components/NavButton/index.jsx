import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

NavButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
NavButton.defaultProps = {
    icon: 'fa fa-question'
};
function NavButton({ icon, onClick }) {
    return (
        <button
            className={`NavButton ${icon}`}
            style={ isDebug ? debug.borderStyle : {} }
            onClick={onClick}
        />
    );
}
export default NavButton;