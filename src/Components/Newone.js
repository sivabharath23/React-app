import React from "react";
import ReactDOM from "react-dom/client";

const Newone = (props) => {
  return (
      <h1>Hello {props.name} !</h1>
  );
};
const myElement = <Newone name="volvo"/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

export default Newone;



