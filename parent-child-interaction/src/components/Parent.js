import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentMsg, setParentMsg] = useState("Hello Child, I am your Parent!");
  const [childReply, setChildReply] = useState("");

  // Handle input change for parent message
  const handleInputChange = (e) => {
    setParentMsg(e.target.value);
  };

  // Function to receive data from Child
  const handleChildData = (message) => {
    setChildReply(message);
  };

  return (
    <div style={{
      border: "3px solid #2980b9",
      padding: "20px",
      margin: "20px",
      borderRadius: "12px",
      backgroundColor: "#ecf0f1",
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h2 style={{ color: "#2980b9" }}>👨‍👦 Parent Component</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Enter Message to Child: </label>
        <input
          type="text"
          value={parentMsg}
          onChange={handleInputChange}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #7f8c8d",
            marginLeft: "10px"
          }}
        />
      </div>

      <p><strong>Reply from Child:</strong> <span style={{ color: "#27ae60" }}>{childReply}</span></p>

      {/* Send data to child */}
      <Child parentMessage={parentMsg} sendData={handleChildData} />
    </div>
  );
}

export default Parent;