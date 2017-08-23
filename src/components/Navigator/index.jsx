import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

import DatePickerContainer from '../DatePickerContainer';
import NavButton from '../NavButton';

Navigator.propTypes = {
    date:       PropTypes.object.isRequired,
    onChange:   PropTypes.func.isRequired,
    onNext:     PropTypes.func.isRequired,
    onPrev:     PropTypes.func.isRequired
};
function Navigator({ date, onChange, onNext, onPrev }) {
    return (
        <div className="Navigator" style={isDebug ? debug.borderStyle : {}}>
            <NavButton onButtonClicked={onPrev} icon="fa fa-chevron-left" />
            <DatePickerContainer 
                date={date}
                onChange={onChange}
            />
            <NavButton onButtonClicked={onNext} icon="fa fa-chevron-right" />
        </div>
    );
}
export default Navigator;