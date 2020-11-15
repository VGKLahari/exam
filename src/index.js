import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';


//config.set({teachers:[{tid:1,name:"Lahari",sid:1,sub:"Math"},{tid:2,name:"Prathyusha",sid:2,sub:"Physics"}]})
export { default as home } from "./components/home.js";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
