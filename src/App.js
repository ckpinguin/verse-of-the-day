import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';

import { isDebug, debug } from './debug';

import './App.css';

import Show from './components/Show/Show';
// import ToggleDisplay from './components/ToggleDisplay/ToggleDisplay';
import Title from './components/Title/Title';
import DateHelper from './shared/DateHelper';
import DatePickerContainer from './components/DatePickerContainer/DatePickerContainer';
import ImageView from './components/ImageView/ImageView';

export default class App extends Component {
    // API-Key for bibleserver.com API with https://our-daily-bread.herokuapp.com/
    static bibleServerAPIKey = 'ad9b36e57ef40242a89170d6f54322c68d6ed86b';

    constructor(props) {
        super(props);
        this.title = 'Our daily bread';
        this.urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';
        this.state = {
            date: props.date ? props.date : DateHelper.randomDate()
        };
        // this.updateDate = _.debounce(this.updateDate,1000)
        
    }

    updateDate = (newDate) => {
        // Don't forget, this is async!
        this.setState ({
            date: newDate
        });
    }

    // Extra currying because a function object is needed as handler
    changeDay = (days, e) => (e) => {
        e.preventDefault(); // prevent default for subcomp. NumberChooser (just a hack for now)
        const dateObj = DateHelper.getDateObj(this.state.date);
        this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    }
    // changeDayBind(days, e) {
    //     e.preventDefault();
    //     const dateObj = DateHelper.getDateObj(this.state.date);
    //     this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    // }
    handleUpPressed = (days, e) => (e) => {
        e.preventDefault();
        const dateObj = DateHelper.getDateObj(this.state.date);
        this.updateDate(new Date(dateObj.year, dateObj.month-1, dateObj.day+days));
    }

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
            <HotKeys keyMap={keyMap} handlers={handlers} >            
                <div className="App" style={ isDebug ? debug.borderStyle : {} } >
                    <div className="App-Title">
                        <Show if={true}>
                            <Title
                                value={this.title}
                            />
                        </Show>
                    </div>
                    <div className="App-Main">
                        <Show if={true}>
                            <ImageView
                                url={url}
                            />
                        </Show>
                    </div>
                    <div className="App-DatePicker">
                        <DatePickerContainer
                            date={this.state.date}
                            onChange={(newDate) => this.updateDate(newDate)}
                        />
                    </div>
                </div>
            </HotKeys>
        );
    }
    
}
