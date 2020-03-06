import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Barriecito-Regular.ttf';
import './fonts/Green Fuz V1.ttf';
import './fonts/homewt.ttf';
import './fonts/vaporizedbb_reg.otf';
import WebFont from 'webfontloader';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import './fonts/BuriedBeforeBB_Reg.otf';
import './fonts/BuriedBeforeBugsBB_Reg.otf';
import './fonts/TrashCinemaBB_ital.otf';
import './fonts/TrashCinemaBB.otf';
import './fonts/DARKAB__.TTF';
import './fonts/WretchedRemainsBB.otf';
import './fonts/InhumanBB.otf';
import './fonts/umberto.ttf';
import './fonts/SanitariumBB.otf';
import './fonts/DestroyEarthRoughBB.otf';
import './fonts/DestroyEarthBB.otf';

ReactDOM.render(<HashRouter>
                  <Home />
                </HashRouter>, document.getElementById('root'));

                WebFont.load({
                  google: {
                    families: ['Barriecito Web:300,400,700']
                  }
                });
serviceWorker.unregister();
