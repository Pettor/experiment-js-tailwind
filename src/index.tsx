import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './assets/styles/manifest.scss';
import './index.css'

const rootEl = document.getElementById('root');
render(<App />, rootEl);
