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
        /** This local state is only needed to hold value in the field 
        *   of this controlled component instead of directly updating
        *   the main state, that would update it immediately after 
        *   pressing a button  */
        this.state = { value: this.props.value };
        // Handlers:
        this.handleUpClick = () => this.props.onChange(this.props.value+1);
        this.handleDownClick = () => this.props.onChange(this.props.value-1);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            console.log('NumberChooser: setting local state with received props: ', nextProps);
            this.setState({ value: nextProps.value });
        }
    }

    handleNumberChange(e) {
        // Only update local state for display
        // Update to model state will be done with onBlur()
        this.setState({ value: e.target.value });
        // this.props.onChange(e.target.value);
    }

    handleInputBlur(e) {
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
                    onClick={this.handleUpClick}
                    icon="fa fa-arrow-up"
                />
                <div className="NumberChooser-caption">{this.props.name}</div>
                <input
                    className="NumberChooser-input"
                    name={this.props.name}
                    type="number"
                    value={this.state.value}
                    onChange={this.handleNumberChange}
                    onBlur={this.handleInputBlur}
                />
                <NavButton
                    onClick={this.handleDownClick}
                    icon="fa fa-arrow-down"
                />
            </div>
        );
    }
}
export default NumberChooser;