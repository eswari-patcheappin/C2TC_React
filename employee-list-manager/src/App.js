import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Employee List Manager</h1>
        <EmployeeList />
      </div>
    );
  }
}

export default App;