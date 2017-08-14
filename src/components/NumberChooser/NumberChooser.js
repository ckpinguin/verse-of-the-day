import React from 'react';
import PropTypes from 'prop-types';

import './NumberChooser.css';

import debug from '../../debug';

import IncButton from '../IncButton/IncButton';
import DecButton from '../DecButton/DecButton';

NumberChooser.propTypes = {
    name:       PropTypes.string,
    value:      PropTypes.number,
    onChange:   PropTypes.func
};
function NumberChooser({ name, value, onChange }) {
    return (
        <div className="col" name={`NumberChooser_${name}`} style={{ background: debug && '#dad'}} >
            {debug && <em>NumberChooser</em>}        
            <IncButton />
            <input value={value} onChange={() => onChange({name})} />
            <DecButton />
        </div>
    );
}
export default NumberChooser;
