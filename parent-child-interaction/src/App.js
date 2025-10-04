import React from "react";
import Parent from "./components/Parent";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2c3e50" }}>ReactJS - Parent & Child Interaction</h1>
      <Parent />
    </div>
  );
}

export default App;