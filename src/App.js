import React, { Component } from 'react';
import './App.css';

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
    }
    
    componentDidMount() {
    }

    render() {
        const formattedDate = DateHelper.formatDate(this.state.date, '-');
        const url = this.urlBase + formattedDate + '.png';
        const date = this.state.date;
        return (  
            <div className="App" style={ isDebug ? debug.borderStyle : {} } >
                <div className="App-Title">
                    <Show if={true}>
                        <Title value={this.title}/>
                    </Show>
                </div>
                <div className="App-Main">
                    <Show if={true}>
                        <ImageView url={url} />
                    </Show>
                </div>
                <div className="App-DatePicker">
                    <DatePickerContainer date={date}/>
                </div>
            </div>
        );
    }
}
