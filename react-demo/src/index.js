import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// <HelloWorld /> 👉 React.createElement(HelloWorld)
// <HelloWorld name="Jon Snow" /> 👉 React.createElement(HelloWorld, {name: "Jon Snow"})
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
