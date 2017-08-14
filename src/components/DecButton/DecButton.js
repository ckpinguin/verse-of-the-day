import React from 'react';
import PropTypes from 'prop-types';

import './DecButton.css';

DecButton.propTypes = {
    onClick: PropTypes.func
};
function DecButton({ onClick }) {
    return (
        <div className="DecButton">
            <button onClick={onClick} />
        </div>
    );
}
export default DecButton;