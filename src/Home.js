import React from 'react';
import Logo from './components/Logo.jsx';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PortalSmashers from './components/PortalSmashers.jsx';
function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <NavBar/>
      <div className = "logoStyle">
        <Logo/>
      </div>
      </header>
      <Switch>
      <Route path='/PortalSmashers' component={PortalSmashers} />
      </Switch>
    </div>

  );
}

export default Home;
