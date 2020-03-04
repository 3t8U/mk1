import React from 'react';
import Logo from './components/Logo.jsx';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PortalSmashers from './components/PortalSmashers.jsx';
import Intro from './components/Intro.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function Home() {
    var logoStyles= {
      display: 'block',
      marginLeft: '35%',
      marginRight: '35%',
      paddingTop: '10vh',
      width: '50%',
      maxWidth: '150px',
      maxHeight: '20%',
      imageAlign: 'center'
    }

  return (
    <div className="Home">
      <Switch>
      <Route exact path='/' component={Intro} />
      <Route path='/PortalSmashers' component={PortalSmashers} />
      <Route path='/Menu' component={Menu} />
      <Route path='/Contact' component={Contact} />
      <Route path='/About' component={About} />
      </Switch>
    </div>

  );
}

export default Home;
