import React from 'react';
import PropTypes from 'prop-types';

import './DecButton.css';

DecButton.propTypes = {
    onClick: PropTypes.func
};
function DecButton({ onClick }) {
    return (
        <button className="DecButton" onClick={onClick} />
    );
}
export default DecButton;