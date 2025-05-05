import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Greeting from './components/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Greeting />
        <App />
    </>
);
