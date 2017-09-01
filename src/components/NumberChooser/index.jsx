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
        this.handlers = {
            onUpClick: this.props.onChange.bind(this, this.props.value+1),
            onDownClick: this.props.onChange.bind(this, this.props.value-1),
            onNumberChange: this.onNumberChange.bind(this),
            onInputBlur: this.onInputBlur.bind(this)
        };

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            console.log('NumberChooser: setting local state with received props: ', nextProps);
            this.setState({ value: nextProps.value });
        }
    }
    onNumberChange(e) {
        this.setState({ value: e.target.value });
        // this.props.onChange(e.target.value);
    }
    onInputBlur(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div
                className="NumberChooser-col"
                name={`NumberChooser_${this.props.name}`}
                style={ isDebug ? debug.borderStyle : {} }
            >       
                <NavButton
                    onClick={this.handlers.onUpClick}
                    icon="fa fa-arrow-up"
                />
                <div className="NumberChooser-caption">{this.props.name}</div>
                <input
                    className="NumberChooser-input"
                    name={this.props.name}
                    type="number"
                    value={this.state.value}
                    onChange={this.handlers.onNumberChange}
                    onBlur={this.handlers.onInputBlur}
                />
                <NavButton
                    onClick={this.handlers.onDownClick}
                    icon="fa fa-arrow-down"
                />
            </div>
        );
    }
}
export default NumberChooser;