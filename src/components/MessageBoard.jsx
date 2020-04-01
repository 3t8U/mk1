import React from 'react';
import date from "date-and-time/date-and-time";
import axios from "axios";
import * as firebase from "firebase";
import MessagesDisplay from "./MessagesDisplay.jsx";
import PostMessage from "./PostMessage.jsx";
import wlogo from './images/wlogo.png';
import logoBack1 from './gifs/logoBack1.gif';
import { Link } from 'react-router-dom';
//Config Firebase
var config = {
  //apiKey: "",
  authDomain: "crud-api-8bb56.firebaseapp.com",
  databaseURL: "https://crud-api-8bb56.firebaseio.com",
  projectId: "crud-api-8bb56",
  storageBucket: "crud-api-8bb56.appspot.com",
  messagingSenderId: "391815000566",
  appId: "1:391815000566:web:30db75c544c10eddb8d7d7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var apiConfig = {
  apiUrl: "http://xampp.d3v/status_api"
};


const departmentList = {
  general: "General",
  events: "Events",
  rideShare: "Ride Share",
  music: "Music",
  what: "What!?!?",
};



function App() {
  //Initialize States
  var [messages, setMessages] = React.useState([]);
  var [messagesLoaded, setMessagesLoaded] = React.useState(false);
  var [msgItems, setMsgItems] = React.useState({
    messeageTxt: "",
    messeageDepartment: ""
  });


  React.useEffect(function() {

    var ref = firebase.database().ref("messagesApp");
    ref.on("value", function(snapshot) {
      var tempArr = [];
      snapshot.forEach(function(child) {
        tempArr.push(child.val());
      });
      console.log(tempArr);
      setMessages(tempArr);


      setMessagesLoaded(true);
    });
  }, []);


  function handleFormEdits(event) {
    const { name, value } = event.target;
    setMsgItems(prevState => ({ ...prevState, [name]: value }));
  }


  function handleFormPost() {

    let formatDate = date.format(new Date(), "YYYY-MM-DD, HH:mm");


    let newMsg = {
      msg: msgItems.messeageTxt,
      type: msgItems.messeageDepartment,
      time: formatDate
    };


    var ref = firebase.database().ref("messagesApp");
    ref.push(newMsg);


  }

  var imgStyles={
    maxWidth: '80%',
    minWidth: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    position: 'relative',
    imageSize: 'cover',
    border: 'solid 10px yellow',
    borderRadius: '5%'

  }

  var homeStyles = {
   display: 'block',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginTop: 'auto',
   marginBottom: 'auto',
   width: '25%',
   textAlign: 'center',
   imageAlign: 'center',
   color: 'yellow',
   backgroundImage: "url(" + {logoBack1} + ")",
   zIndex: '1',
   fontFamily: 'Inhuman',

  };

  var hStyles={
    zIndex: '1',
    textAlign: 'center',
    margin: '10%',
    fontFamily: 'Inhuman',
    color: 'yellow',
    fontSize: '10vw',
    objectAlign: 'center'
  }


  return (
    <div className="msgBoardC" style={{ width: "80%", margin: "40px auto", fontFamily: 'Inhuman', color: 'yellow' }}>
    <Link to="/Menu"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link>

    <h1 style={hStyles}>MESSAGE BOARD</h1>
      <PostMessage
        departmentList={departmentList}
        msgItems={msgItems}
        handleFormEdits={handleFormEdits}
        handleFormPost={handleFormPost}
      />
      <MessagesDisplay messages={messages} messagesLoaded={messagesLoaded} />
    </div>
  );
}

export default App;
