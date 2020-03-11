import React from "react";
import logoBack1 from './gifs/logoBack1.gif'
export default function PostMessage({
  departmentList,
  msgItems,
  handleFormEdits,
  handleFormPost
}) {
  function departmentOptions() {
    //Convert Object into an array of keys to map over
    var departmentKeys = Object.keys(departmentList);

    //Map through array and build out the key and value pairs
    return departmentKeys.map(function(key, i) {
      return (
        <option value={key} key={i}>
          {departmentList[key]}
        </option>
      );
    });
  }

  //Update states of form items
  function updateFormEdits(e) {
    handleFormEdits(e);
  }

  function postFormUpdate(e) {
    e.preventDefault();

    handleFormPost();
  }

  return (
    <div
      className="postMsgC"
      style={{
        backgroundImage: "url(" + {logoBack1} + ")",
        width: "30%",
        float: "left",
        padding: "20px",
        border: 'solid 10px yellow',
        borderRadius: '5%',
        fontFamily: 'Inhuman',
        color: 'yellow',
        zIndex: '2',
        textAlign: 'center',
      }}
    >
      <form onSubmit={postFormUpdate}>
        <h2>Post A Message</h2>

        <textarea
          name="username"
          value={msgItems.messeageName}
          onChange={updateFormEdits}
          placeholder="User Name"
          style={{ width: "90%", height: "20px",  backgroundImage: "url(" + {logoBack1} + ")", }}
        />
        <br />
        <textarea
          name="messeageTxt"
          value={msgItems.messeageTxt}
          onChange={updateFormEdits}
          placeholder="Enter message"
          style={{ width: "98%", height: "80px",  backgroundImage: "url(" + {logoBack1} + ")", }}
        />
        <br />

        <select
          name="messeageDepartment"
          value={msgItems.messeageDepartment}
          onChange={updateFormEdits}
          id="deparment"
          style={{ width: "100%", height: "30px", backgroundImage: "url(" + {logoBack1} + ")",}}
        >
          <option>- Select Topic-</option>
          {departmentOptions()}
        </select>
        <br />
        <br />

        <input
          type="submit"
          value="Post Message"
          style={{ width: "100px", height: "30px", backgroundImage: "url(" + {logoBack1} + ")", backgroundColor: 'blue', borderRadius:'10%' }}
        />
      </form>
    </div>
  );
}
