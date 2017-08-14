import React from 'react';
import PropTypes from 'prop-types';

import './IncButton.css';

IncButton.propTypes = {
    onClick: PropTypes.func
};
function IncButton({ onClick }) {
    return (
        <button className="IncButton" onClick={onClick} />
    );
}
export default IncButton;