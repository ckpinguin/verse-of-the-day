import React from 'react';
import PropTypes from 'prop-types';

import './ImageView.css';

// import debug from '../../debug';

ImageView.proptypes = {
    url:    PropTypes.string
};
function ImageView({ url }) {
    return (
        <img
            src={url}
            alt="Daily Bread"
        />
    );
}
export default ImageView;