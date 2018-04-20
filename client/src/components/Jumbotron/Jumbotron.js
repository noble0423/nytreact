import React from "react";

const Jumbotron = ({ id, children }) => (
  <div
    // style={{ height: 200, clear: "both", paddingTop: 55, textAlign: "center" }}
    style={{ clear : "both", textAlign : "center"}}
    className="jumbotron" id={id}
  >
    {children}
  </div>
);

export default Jumbotron;
