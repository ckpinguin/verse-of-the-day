import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

// import { isDebug, debug } from './debug';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
