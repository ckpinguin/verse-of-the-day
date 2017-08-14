import React from 'react';
import PropTypes from 'prop-types';

import './IncButton.css';

import debug from '../../debug';

IncButton.propTypes = {
    onClick: PropTypes.func
};
function IncButton({ onClick }) {
    return (
        <button className="fa fa-arrow-up" style={{ background: debug && 'orange'}} onClick={onClick} />
    );
}
export default IncButton;