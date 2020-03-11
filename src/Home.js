import React from 'react';
import Logo from './components/Logo.jsx';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import YouTube from 'react-youtube';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PortalSmashers from './components/PortalSmashers.jsx';
import Intro from './components/Intro.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Video from './components/Video.jsx';
import Pictures from './components/Pictures.jsx';
import Enter from './components/Enter.jsx';
import Artists from './components/Artists.jsx';
import AboutPS from './components/AboutPS.jsx';
import Tickets from './components/Tickets.jsx';
import Location from './components/Location.jsx';
import Trouble from './components/Trouble.jsx';
import MoreTrouble from './components/MoreTrouble.jsx';
import MessageBoard from './components/MessageBoard.jsx';
import BoneMech from './components/BoneMech.jsx';

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
      <Route exact path='/' component={Enter} />
      <Route exact path='/PortalSmashers' render={() => <PortalSmashers selected={"main"} />} />
      <Route path='/Menu' component={Menu} />
      <Route path='/Video' component={Video} />
      <Route path='/Contact' component={Contact} />
      <Route path='/About' component={About} />
      <Route path='/Pictures' component={Pictures} />
      <Route path='/Enter' component={Enter} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Artists' component={Artists} />
      <Route path='/AboutPS' component={AboutPS} />
      <Route path='/Location' component={Location} />
      <Route path='/Tickets' component={Tickets} />
      <Route path='/Trouble' component={Trouble} />
      <Route path='/MoreTrouble' component={MoreTrouble} />
      <Route path='/MessageBoard' component={MessageBoard} />
      <Route path='/BoneMech' component={BoneMech} />
      </Switch>
    </div>

  );
}

export default Home;
