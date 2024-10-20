import React, { useState } from "react";

function ToDoItem(props) {
  //!!*** USE THIS SNIPPET TO STRIKE OFF THE ITEMS THAT IS CLICKED
  //const [click, setClick] = useState(false);

  //  function strikeOff() {
  //  setClick((prevValue) => {
  //  return !prevValue;
  // });
  // }
  // return (
  //    <div onClick={strikeOff}>
  //      <li style={{ textDecoration: click ? "line-through" : "none" }}>
  //        {props.text}
  //      </li>
  //      ;
  //</div>
  //);  ***!!

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
