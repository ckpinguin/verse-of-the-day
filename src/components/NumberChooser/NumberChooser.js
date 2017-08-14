import React from 'react';
import PropTypes from 'prop-types';

import './NumberChooser.css';

import IncButton from '../IncButton/IncButton';
import DecButton from '../DecButton/DecButton';

NumberChooser.propTypes = {
    name:       PropTypes.string,
    onChange:   PropTypes.func
};
function NumberChooser({ name, value, onChange }) {
    return (
        <div className="col" name={`NumberChooser_${name}`} >
            <IncButton />
            <input value={value} onChange={() => onChange({name})} />
            <DecButton />
        </div>
    );
};
export default NumberChooser;
