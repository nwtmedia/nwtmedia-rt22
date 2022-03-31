import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1 style={{ "text-align": "center", margin: "20%, auto" }}>
        "Reactivity"
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
