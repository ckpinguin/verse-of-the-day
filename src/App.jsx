import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';

import { isDebug, debug } from './debug';

import './App.css';

import { PreCacheImg } from './shared';
import { randomDate, formatDate, getDateWithChangedDays } from './shared/DateHelper';
import Title from './components/Title';
import DateNavigator from './components/DateNavigator';
import ImageView from './components/ImageView';

export default class App extends Component {
    // API-Key for bibleserver.com API with https://our-daily-bread.herokuapp.com/
    static bibleServerAPIKey = 'ad9b36e57ef40242a89170d6f54322c68d6ed86b';

    static propTypes = {
        date:       PropTypes.object,
        title:      PropTypes.string,
        urlBase:    PropTypes.string
    }
    static defaultProps = {
        date:       randomDate(),
        title:      'Our daily bread',
        urlBase:    'https://logos.com/media/VerseOfTheDay/768x432/' 
    }
    
    constructor(props) {
        super(props);
        this.state = {
            date: props.date 
        };
        // Handlers:
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(newDate) {
        if (isDebug) console.log('App: updating state: ', newDate);
        // Don't forget, setState() is async!
        this.setState ({
            date: newDate
        });
    }
  
    getImgUrl(date) {
        const formattedDate = formatDate(date, '-');
        const url = this.props.urlBase + formattedDate + '.png';
        // const urlNext = this.props.urlBase + formatDate(.date, '-'); // eslint-disable-line no-unused-vars
        return url;
    }
    getPreloadImgList(date, count) {
        const urls = [];
        let i;
        for (i=0; i<count; i+=2) {
            urls[i] = this.getImgUrl(new Date(date.getTime() - i * 86400000 ));
            urls[i+1] = this.getImgUrl(new Date(date.getTime() + i * 86400000 ));
        }
        return urls;
    }

    render() {
        // TODO: Make the standard up/down key binding work again in subcomponent NumberChooser
        const keyMap = {
            'dayPlus':     ['up', 'right'],
            'dayMinus':   ['down', 'left']
        };
        const handlers = {
            'dayPlus':    () => this.updateDate(getDateWithChangedDays(this.state.date, +1)),
            'dayMinus':   () => this.updateDate(getDateWithChangedDays(this.state.date, -1)),
            'mouseWheel': (e) => e.deltaY > 0 ? handlers.dayMinus() : handlers.dayPlus()
        };
        const url = this.getImgUrl(this.state.date);
        const urls = this.getPreloadImgList(this.state.date, 5);
        return (  
            <HotKeys
                onWheel={handlers.mouseWheel}
                keyMap={keyMap}
                handlers={handlers}
                className="App"
                style={ isDebug ? debug.borderStyle : {} }
            >
                <div className="App-Title">
                    <Title
                        value={this.props.title}
                    />                       
                </div>
                <div className="App-Main">
                    <ImageView
                        url={url}
                    />
                    <PreCacheImg
                        images={urls}
                    />
                </div>
                <div className="App-Handle">
                    <DateNavigator
                        date={this.state.date}
                        onChangeDate={this.updateDate}
                    />
                </div>
                <div className="App-Footer" />
            </HotKeys>
        );
    }
}