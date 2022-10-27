import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Main from "./state.js"//
import Main from "./lifestyle.js"
import Class from "./class.js"
import Fun from "./function"


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Main/>);

root.render(<Class/>);
// root.render(<Fun />)


//reportWebVitals();
