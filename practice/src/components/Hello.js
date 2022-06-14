import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello Stefan</h1>
  //   </div>
  // )
  return React.createElement(
    "div",
    {id: 'hello', className: 'he'},
    React.createElement("h1", null, "Hello Stefan")
  );
};

export default Hello;
