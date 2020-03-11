import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Logo from './Logo'

export default function Message({ msgItem }) {
 //<div>{msgItem.msg}</div>

 return (
   <div className="message" style={{ paddingBottom: "20px", fontFamily: 'Inhuman', color: 'yellow'  }}>
     <b>{msgItem.time}</b>
     <br />
     {msgItem.msg}
   </div>
 );
}
