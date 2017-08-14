import React from 'react';
import PropTypes from 'prop-types';

import './DecButton.css';

import debug from '../../debug';

DecButton.propTypes = {
    onClick: PropTypes.func
};
function DecButton({ onClick }) {
    return (
        <button className="DecButton fa fa-arrow-down" style={{ background: debug && 'lightgreen'}} onClick={onClick} />
    );
}
export default DecButton;