import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* Access the method using the props object */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
