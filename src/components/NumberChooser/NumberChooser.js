import React from 'react';
import PropTypes from 'prop-types';

import './NumberChooser.css';

import { isDebug, debug } from '../../debug';

import IncButton from '../IncButton/IncButton';
import DecButton from '../DecButton/DecButton';

NumberChooser.propTypes = {
    name:       PropTypes.string.isRequired,
    value:      PropTypes.number.isRequired,
    onChange:   PropTypes.func.isRequired,
};
function NumberChooser({ name, value, onChange }) {
    return (
        <div className="col" name={`NumberChooser_${name}`} style={ isDebug ? debug.borderStyle : {} } >       
            <IncButton
                onButtonClicked={() => onChange(value+1)}
            />
            <input
                name={name}
                type="number"
                defaultValue={value} // uncontrolled component
                key={value} // key is used to force re-rendering on uncontrolled comp.
                // value={value} // controlled component
                // onChange={(e) => { onChange(e.target.value) } }
                onBlur={(e) => { onChange(e.target.value); }}
            />
            <DecButton
                onButtonClicked={() => onChange(value-1)}
            />
        </div>
    );
}
export default NumberChooser;
