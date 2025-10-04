import React, { Component } from "react";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: ["John", "Anitha", "Suresh"],
      newEmployee: ""
    };

    console.log("Constructor: EmployeeList component created");

    // Event Binding (Method 1: Binding in constructor)
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  // Lifecycle Method 1
  componentDidMount() {
    console.log("componentDidMount: Component mounted, fetching employee data...");
    // Simulate API call
    setTimeout(() => {
      this.setState({ employees: [...this.state.employees, "Meera"] });
    }, 2000);
  }

  // Lifecycle Method 2
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Employee list updated");
    console.log("Previous Employees:", prevState.employees);
    console.log("Current Employees:", this.state.employees);
  }

  // Lifecycle Method 3
  componentWillUnmount() {
    console.log("componentWillUnmount: Cleaning up EmployeeList component...");
  }

  // Event Binding (Method 1 - Bound in constructor)
  handleAddEmployee() {
    if (this.state.newEmployee.trim() !== "") {
      this.setState({
        employees: [...this.state.employees, this.state.newEmployee],
        newEmployee: ""
      });
    }
  }

  // Event Binding (Method 2 - Arrow function as class property)
  handleInputChange = (event) => {
    this.setState({ newEmployee: event.target.value });
  };

  // Event Binding (Method 3 - Inline arrow function in JSX)
  removeEmployee(index) {
    const updatedList = this.state.employees.filter((_, i) => i !== index);
    this.setState({ employees: updatedList });
  }

  render() {
    console.log("Render: EmployeeList component is rendering");
    return (
      <div>
        <h2>Employees</h2>
        <ul>
          {this.state.employees.map((employee, index) => (
            <li key={index}>
              {employee} &nbsp;
              <button onClick={() => this.removeEmployee(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newEmployee}
          onChange={this.handleInputChange}
          placeholder="Enter employee name"
        />
        <button onClick={this.handleAddEmployee}>Add Employee</button>
      </div>
    );
  }
}

export default EmployeeList;