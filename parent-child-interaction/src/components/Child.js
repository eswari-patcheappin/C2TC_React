import React, { useState } from "react";

function Child({ parentMessage, sendData }) {
  const [childMsg, setChildMsg] = useState("Hi Parent!");

  return (
    <div style={{
      border: "3px solid #27ae60",
      padding: "20px",
      margin: "20px",
      borderRadius: "12px",
      backgroundColor: "#fdfefe"
    }}>
      <h3 style={{ color: "#27ae60" }}>👶 Child Component</h3>

      <p><strong>Message from Parent:</strong> <span style={{ color: "#2980b9" }}>{parentMessage}</span></p>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Reply to Parent: </label>
        <input
          type="text"
          value={childMsg}
          onChange={(e) => setChildMsg(e.target.value)}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #7f8c8d",
            marginLeft: "10px"
          }}
        />
      </div>

      <button
        onClick={() => sendData(childMsg)}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#27ae60",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Send to Parent
      </button>
    </div>
  );
}

export default Child;