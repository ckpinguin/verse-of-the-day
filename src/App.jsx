import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';

import { isDebug, debug } from './debug';

import './App.css';

import Show from './components/Show';
// import ToggleDisplay from './components/ToggleDisplay/ToggleDisplay';
import Title from './components/Title';
import DateHelper from './shared/DateHelper';
import Navigator from './components/Navigator';
import ImageView from './components/ImageView';

export default class App extends Component {
    // API-Key for bibleserver.com API with https://our-daily-bread.herokuapp.com/
    static bibleServerAPIKey = 'ad9b36e57ef40242a89170d6f54322c68d6ed86b';

    static propTypes = {
        date:   PropTypes.object
    }
    static defaultProps = {
        date:   DateHelper.randomDate()
    }
    
    constructor(props) {
        super(props);
        this.title = 'Our daily bread';
        this.urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';
        this.state = {
            date: props.date 
        };
        this.changeDay = this.changeDay.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate = (newDate) => {
        // Don't forget, this is async!
        this.setState ({
            date: newDate
        });
    }

    // Extra currying because a function object is needed as handler
    changeDay = (days, e) => (e) => {
        // e.preventDefault(); // prevent default for subcomp. NumberChooser (just a hack for now)
        const dateObj = DateHelper.getDateObj(this.state.date);
        this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    }
    // changeDayBind(days, e) {
    //     e.preventDefault();
    //     const dateObj = DateHelper.getDateObj(this.state.date);
    //     this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    // }
    // handleUpPressed = (days, e) => (e) => {
    //     e.preventDefault();
    //     const dateObj = DateHelper.getDateObj(this.state.date);
    //     this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    // }

    render() {
        // TODO: Make the standard up/down key binding work again in subcomponent NumberChooser
        const keyMap = {
            'dayPlus':     ['up', 'right'],
            'dayMinus':   ['down', 'left']
        };
        const handlers = {
            // Currying (partial function argument application returning a function)
            // This could be done with `bind` also
            'dayPlus':     this.changeDay(+1),
            'dayMinus':   this.changeDay(-1)
        };
        const formattedDate = DateHelper.formatDate(this.state.date, '-');
        const url = this.urlBase + formattedDate + '.png';
        return (  
            <HotKeys
                keyMap={keyMap}
                handlers={handlers}
                className="App"
                style={ isDebug ? debug.borderStyle : {} }
            >
                <div className="App-Title">
                    <Show if>
                        <Title
                            value={this.title}
                        />
                    </Show>
                </div>
                <div className="App-Main">
                    <Show if>
                        <ImageView
                            url={url}
                        />
                    </Show>
                </div>
                <div className="App-DatePicker">
                    <Navigator 
                        date={this.state.date}
                        onChange={this.updateDate}
                        onNext={this.changeDay(+1)}
                        onPrev={this.changeDay(-1)}
                    />
                </div>
            </HotKeys>
        );
    }
    
}
