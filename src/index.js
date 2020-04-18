import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import env from 'dotenv';

env.config();

ReactDOM.render(<App />, document.getElementById('root'));
