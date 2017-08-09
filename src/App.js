import React, { Component } from 'react';
import './App.css';

import Show from './Show';
import ToggleDisplay from './ToggleDisplay';

import DateHelper from './DateHelper';
import DatePickerContainer from './DatePickerContainer';

class App extends Component {
    title = 'Our daily bread';
    urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';

    constructor(props) {
        super(props);
        this.state = {
            date: DateHelper.randomDate()
        };
    }

    render = () => {
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
export default App;