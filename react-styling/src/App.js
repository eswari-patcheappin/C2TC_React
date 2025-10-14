import React from "react";
import "./App.css"; // External CSS
import styles from "./App.module.css"; // CSS Module

function App() {
  const inlineStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "8px"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Styling Examples</h1>

      {/* Inline Styling */}
      <p style={inlineStyle}>This is styled using Inline CSS</p>

      {/* External CSS */}
      <p className="external">This is styled using External CSS</p>

      {/* CSS Module */}
      <p className={styles.moduleStyle}>This is styled using CSS Module</p>
    </div>
  );
}

export default App;