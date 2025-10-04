import React, { useState, useCallback } from "react";

function WeatherSearch({ onSearch }) {
  const [input, setInput] = useState("");

  // useCallback to prevent re-creation
  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim()) {
        onSearch(input);
        setInput("");
      }
    },
    [input, onSearch]
  );

  return (
    <form onSubmit={handleSearch} style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherSearch;