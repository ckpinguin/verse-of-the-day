import React, { Component } from 'react';
import './App.css';

import Show from './components/Show/Show';
import ToggleDisplay from './components/ToggleDisplay/ToggleDisplay';

import DateHelper from './shared/DateHelper';
import DatePickerContainer from './components/DatePickerContainer/DatePickerContainer';

export default class App extends Component {
    // API-Key for bibleserver.com API with https://our-daily-bread.herokuapp.com/
    static bibleServerAPIKey = 'ad9b36e57ef40242a89170d6f54322c68d6ed86b';
    constructor(props) {
        super(props);
        this.title = 'Our daily bread';
        this.urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';
        this.state = {
            date: DateHelper.randomDate()
        };
    }
    
    componentDidMount() {
    }

    render()  {
        const formattedDate = DateHelper.formatDate(this.state.date, '-');
        const url = this.urlBase + formattedDate + '.png';
        const date = this.state.date;

        return (
            <div className="App" >
                <div className="App-header" >
                    <ToggleDisplay show>
                        <img src={url} className="App-logo"
                            alt="Daily Bread" />
                    </ToggleDisplay>
                    <Show if={true} >
                        <h2>{this.title}</h2>
                    </Show>
                </div>
                <DatePickerContainer date={date}/>
            </div>
        );
    }
}
