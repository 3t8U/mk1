import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import mask1 from './gifs/mask1.gif'


 function Trouble
 () {

   var shitStyles ={
     size: 'cover',
     zIndex: '2',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '100%',
     padding: '.25%',
     border:'15px solid black',
     opacity: '.85',
     blurRadius: '10px',
    


   }




   return(
     <div>
     <Link to="/Menu"><img style={shitStyles} src={mask1} alt="fucked"></img>
     </Link>


     </div>
   );
 }

export default Trouble
;
