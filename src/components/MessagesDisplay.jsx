import React from "react";
import Message from "./Message";

export default function MessagesDisplay({ messages, messagesLoaded }) {
  function getMessages() {
    if (messagesLoaded) {
      return messages.slice(0).reverse().map(function(msgItem, i){
        return <Message key={i} msgItem={msgItem} />;
      });
    } else {
      return <div>Loading...</div>;
    }
  }



  return (
    <div
      className="msgsC"
      style={{
        textAlign: 'center',
        width: "55%",
        float: "right",
        padding: "20px",border: 'solid 10px yellow',
         borderRadius: '5%',
         fontFamily: 'Inhuman',
         color: 'yellow'
      }}
    >
      <h2 style={{fontSize: '10vh'}}>Messages</h2>

      {getMessages()}
    </div>
  );
}
