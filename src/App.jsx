import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';

import { isDebug, debug } from './debug';

import './App.css';

import PreCacheImg from './shared/PreCacheImg';
import { randomDate, formatDate, getDateWithChangedDays } from './shared/DateHelper';
import Show from './components/Show';
import { Dummy } from './components/ToggleDisplay';
import Title from './components/Title';
import DateNavigator from './components/DateNavigator';
import ImageView from './components/ImageView';


export default class App extends Component {
    // API-Key for bibleserver.com API with https://our-daily-bread.herokuapp.com/
    static bibleServerAPIKey = 'ad9b36e57ef40242a89170d6f54322c68d6ed86b';

    static propTypes = {
        date:   PropTypes.object
    }
    static defaultProps = {
        date:   randomDate()
    }
    
    constructor(props) {
        super(props);
        this.title = 'Our daily bread';
        this.urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';
        this.state = {
            date: props.date 
        };
        // Handlers:
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(newDate) {
        console.log('App: updating state: ', newDate);
        // Don't forget, setState() is async!
        this.setState ({
            date: newDate
        });
    }
  
    getImgUrl() {
        const formattedDate = formatDate(this.state.date, '-');
        const url = this.urlBase + formattedDate + '.png';
        const urlNext = this.urlBase + formatDate(this.state.date, '-');
        return url;
    }

    render() {
        // TODO: Make the standard up/down key binding work again in subcomponent NumberChooser
        const keyMap = {
            'dayPlus':     ['up', 'right'],
            'dayMinus':   ['down', 'left']
        };
        const handlers = {
            'dayPlus':     () => this.updateDate(getDateWithChangedDays(this.state.date, +1)),
            'dayMinus':   () => this.updateDate(getDateWithChangedDays(this.state.date, -1))
        };
        const url = this.getImgUrl();
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
                    <PreCacheImg
                        images={[
                            url,
                        ]}
                    /> 
                    <Show if>
                        <ImageView url={url} />
                    </Show>
                </div>
                <div className="App-DatePicker">
                    <DateNavigator
                        date={this.state.date}
                        onChangeDate={this.updateDate}
                    />
                </div>
            </HotKeys>
        );
    }
}