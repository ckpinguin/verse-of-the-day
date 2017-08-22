import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

// import { isDebug, debug } from './debug';

import App from './App';

ReactDOM.render(<App data-toggle-id="App-Title" />, document.getElementById('root'));
registerServiceWorker();

// Just some repetition of event handling by delegation
/* document.addEventListener('click', (event) => {
    console.log('got a click');
    if (event.target.dataset.counter !== undefined) { // if the attribute exists...
        console.log('got a counter');
        if (isNaN(event.target.value)) event.target.value=0;
        event.target.value++;
        console.log('counter of ', event.target, ' is now: ', event.target.value);
    }
    if (event.target.dataset.toggleId !== undefined) {
        console.log('got a toggleId');
        const id = event.target.dataset.toggleId;
        console.log('id is: ', id);
        const elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    } 
}); */