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

//API URL
// Using Firebase instead
var apiConfig = {
  apiUrl: "http://xampp.d3v/status_api"
};

//List of Departments
const departmentList = {
  general: "General",
  events: "Events",
  rideShare: "Ride Share",
  music: "Music",
  what: "What!?!?",
};

//Fake Messages for intial testing
/*
const fakeMessages = [
  {
    id: 1,
    msg: "test message 1",
    time: "2019-04-11, 09:15"
  },
  {
    id: 2,
    msg: "test message 2",
    time: "2019-04-14, 17:12"
  }
]
*/

function App() {
  //Initialize States
  var [messages, setMessages] = React.useState([]);
  var [messagesLoaded, setMessagesLoaded] = React.useState(false);
  var [msgItems, setMsgItems] = React.useState({
    messeageTxt: "",
    messeageDepartment: ""
  });

  //Using an empty array sets it to trigger just on load
  React.useEffect(function() {
    //Load current messages from API
    /*Disable axios for firebase
    axios.get(apiConfig.apiUrl + "/get.php?delay=5").then(function(response) {
      //Insert Data
      setMessages(response.data);


      //Change loading status
      setMessagesLoaded(true);
    });
    */

    var ref = firebase.database().ref("messagesApp");
    ref.on("value", function(snapshot) {
      var tempArr = [];
      snapshot.forEach(function(child) {
        //console.log(child.val());
        tempArr.push(child.val());
      });
      console.log(tempArr);
      setMessages(tempArr);

      //Change loading status
      setMessagesLoaded(true);
    });
  }, []);

  //Dynamically Update States for the form
  function handleFormEdits(event) {
    const { name, value } = event.target;
    setMsgItems(prevState => ({ ...prevState, [name]: value }));
  }

  //Submit a new post
  function handleFormPost() {
    //Use data and time imported package to format date
    let formatDate = date.format(new Date(), "YYYY-MM-DD, HH:mm");

    //Create an object to match the API
    let newMsg = {
      msg: msgItems.messeageTxt,
      type: msgItems.messeageDepartment,
      time: formatDate
    };

    //Insert into firebase
    var ref = firebase.database().ref("messagesApp");
    ref.push(newMsg);

    //Use axios package to post to the PHP API
    /*Disable axios for firebase
    axios
      .post(apiConfig.apiUrl + "/post.php", newMsg)
      .then(function(response) {
        if (response.data.success) {
          //Database was updated so just add the new entry into the state
          let updatedMessages = messages.slice(0); //make a copy of the message
          updatedMessages.push(newMsg); //add the new message
          setMessages(updatedMessages);

          //Reset State to clear form
          setMsgItems(prevState => ({ ...prevState, messeageTxt: "" }));
          setMsgItems(prevState => ({ ...prevState, messeageDepartment: "" }));
        }
      })
      .catch(function(error) {
        console.log(error);
      });
      */
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
    <Link to="/PortalSmashers"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link>

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
