import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

ImageView.proptypes = {
    url:    PropTypes.string.isRequired
};
function ImageView({ url }) {
    // const borderStyle = { border: '6px solid red' };
    
    return (
        <div className="ImageView" style={ isDebug ? debug.borderStyle : {} }>
            {isDebug && <em>ImageView</em>}
            <img
                src={url}
                alt="Daily Bread"
            />
        </div>
    );
}
export default ImageView;