import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

Title.propTypes = {
    value: PropTypes.string.isRequired
};
function Title({ value }) {
    return (
        <div className="Title" style={ isDebug ? debug.borderStyle : {} }>
            {isDebug && <em>Title</em>}
            <h2>{value}</h2>
        </div>
    );
}
export default Title;