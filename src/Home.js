import React from 'react';
import Logo from './components/Logo.jsx';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PortalSmashers from './components/PortalSmashers.jsx';
import Intro from './components/Intro.jsx';

function Home() {
  return (
    <div className="Home">

      <Switch>
      <Route path='/PortalSmashers' component={PortalSmashers} />
      <Route exact path='/' component={Intro} />
      </Switch>
    </div>

  );
}

export default Home;
