import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './todoStore/index.js';


ReactDOM.render(
    <div>
        <DevTools />
        <App />
    </div>,
    document.getElementById('root')
);