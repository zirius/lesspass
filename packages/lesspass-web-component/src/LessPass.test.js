import React from "react";
import ReactDOM from "react-dom";
import LessPass from "./LessPass";

it("LessPass renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LessPass />, div);
  ReactDOM.unmountComponentAtNode(div);
});
