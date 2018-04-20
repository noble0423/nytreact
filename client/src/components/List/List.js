import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    // className="list-overflow-container"
    <div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
