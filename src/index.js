import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20%, auto" }}>"Reactivity"</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
