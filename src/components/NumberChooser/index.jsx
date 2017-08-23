import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { isDebug, debug } from '../../debug';

import NavButton from '../NavButton';

class NumberChooser extends React.Component {
    static propTypes = {
        name:       PropTypes.string.isRequired,
        value:      PropTypes.number.isRequired,
        onChange:   PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        /** This state is only needed to hold value in the field 
        *   of this controlled component instead of directly updating
        *   the main state, that would update it immediately after 
        *   pressing a button  */
        this.state = { value: this.props.value };
        this.onUpClick = this.props.onChange.bind(this, this.state.value+1);
        this.onDownClick = this.props.onChange.bind(this, this.state.value-1);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });
        }
    }
    onNumberChange(e) {
        this.setState({ value: e.target.value });
    }
    onInputBlur(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div className="NumberChooser-col" name={`NumberChooser_${this.props.name}`} style={ isDebug ? debug.borderStyle : {} } >       
                <NavButton
                    onButtonClicked={this.onUpClick}
                    icon="fa fa-arrow-up"
                />
                <div className="NumberChooser-caption">{this.props.name}</div>
                <input
                    className="NumberChooser-input"
                    name={this.props.name}
                    type="number"
                    value={this.state.value}
                    onChange={this.onNumberChange}
                    onBlur={this.onInputBlur}
                />
                <NavButton
                    onButtonClicked={this.onDownClick}
                    icon="fa fa-arrow-down"
                />
            </div>
        );
    }
}
export default NumberChooser;