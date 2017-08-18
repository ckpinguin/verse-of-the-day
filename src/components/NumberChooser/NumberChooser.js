import React from 'react';
import PropTypes from 'prop-types';

import './NumberChooser.css';

import { isDebug, debug } from '../../debug';

import IncButton from '../IncButton/IncButton';
import DecButton from '../DecButton/DecButton';

export default class NumberChooser extends React.Component {
    static propTypes = {
        name:       PropTypes.string.isRequired,
        value:      PropTypes.number.isRequired,
        onChange:   PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });
        }
    }
    render() {
        return (
            <div className="col" name={`NumberChooser_${this.props.name}`} style={ isDebug ? debug.borderStyle : {} } >       
                <IncButton
                    onButtonClicked={() => this.props.onChange(this.state.value+1)}
                />
                <input
                    name={this.props.name}
                    type="number"
                    value={this.state.value}
                    onChange={(e) => { this.setState({ value: e.target.value }); } }
                    onBlur={(e) => { this.props.onChange(e.target.value); }}
                />
                <DecButton
                    onButtonClicked={() => this.props.onChange(this.state.value-1)}
                />
            </div>
        );
    }
}