import React from 'react';
import PropTypes from 'prop-types';

import './IncButton.css';

IncButton.propTypes = {
    onClick: PropTypes.func
};
function IncButton({ onClick }) {
    return (
        <div className="IncButton">
            IncButton dummy
        </div>
    );
}
export default IncButton;