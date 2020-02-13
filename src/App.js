import React, { Component } from "react";

import "./App.css";
import EmployeeList from "./EmployeeList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  createNewEmployee = newEmployee => {
    this.setState({ employees: newEmployee });
  };
  render() {
    return (
      <div className="App">
        <EmployeeList createNewEmployee={this.createNewEmployee} />
        <ul>
          {this.state.employees.map(employee => (
            <li>{employee}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
