import React from 'react';
import PropTypes from 'prop-types';

import './NavButton.css';

import { isDebug, debug } from '../../debug';

NavButton.propTypes = {
    icon:       PropTypes.string,
    id:         PropTypes.string,
    onClick:    PropTypes.func.isRequired
};
NavButton.defaultProps = {
    icon: 'fa fa-question'
};
function NavButton({ id, icon, onClick }) {
    return (
        <div
            className={`NavButton ${icon}`} style={ isDebug ? debug.borderStyle : {} }
            id={id}
            onClick={onClick}
        />
    );
}
export default NavButton;