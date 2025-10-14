import React, { useState } from "react";
function EventDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");
  // Event Handler as a separate function
  function handleButtonClick() {
    setCount(count + 1);
  }
  // Event Handler using Arrow Function
  const handleMouseOver = () => {
    setColor("green");
  };
  // Inline Event Handler will be used directly in JSX
  return (
    <div>
      <h2 style={{ color: color }}>Event Handling Examples</h2>
      {/* Separate function */}
      <button onClick={handleButtonClick}>
        Click Me (Count: {count})
      </button>
      <br /><br />
      {/* Arrow function */}
      <button onMouseOver={handleMouseOver} onMouseOut={() => setColor("blue")}>
        Hover Me (Color changes)
      </button>
      <br /><br />
      {/* Inline function */}
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
      <br />
      {/* Passing arguments to event handler */}
      <button onClick={() => alert(`Hello, ${text || "User"}!`)}>
        Greet
      </button>
    </div>
  );
}
export default EventDemo;
