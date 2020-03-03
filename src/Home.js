import React from 'react';
import Logo from './components/Logo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PortalSmashers from './components/PortalSmashers.jsx';
import Intro from './components/Intro.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function Home() {
  return (
    <div className="Home">

      <Switch>
      <Route path='/PortalSmashers' component={PortalSmashers} />
      <Route exact path='/' component={Intro} />
      <Route path='/Menu' component={Menu} />
      <Route path='/Contact' component={Contact} />
      <Route path='/About' component={About} />
      </Switch>
    </div>

  );
}

export default Home;
