import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter>
                  <Home />
                </HashRouter>, document.getElementById('root'));

                WebFont.load({
                  google: {
                    families: ['Barriecito Web:300,400,700']
                  }
                });
serviceWorker.unregister();
