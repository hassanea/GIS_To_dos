import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
/* w3 CSS */
import 'w3-css/w3.css';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
                

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
                
serviceWorker.register();
