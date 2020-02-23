import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

const initialState = {
  name: "",
  surname: "",
  department: "",
  errors: { nameError: "", surnameError: "", departmentError: "" }
};

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
    this.setState({ [event.target.department]: event.target.value });
    this.setState({ [event.target.surname]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    let surnameError = "";
    let departmentError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.surname) {
      surnameError = "Surname cannot be blank";
    }

    if (!this.state.department) {
      departmentError = "Department cannot be blank";
    }

    if (nameError || surnameError || departmentError) {
      this.setState({ nameError, surnameError, departmentError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      let newEmployee = this.state;
      this.props.createNewEmployee(newEmployee);
      this.setState({ state: initialState });
    }
  };

  render() {
    const { name, surname, department } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            name="name"
            id="outlined-basic"
            label="NAME"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <div style={{ color: "red" }}>{this.state.nameError}</div>

          <TextField
            name="surname"
            id="outlined-basic"
            label="SURNAME"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.surname}
          />
          <div style={{ color: "red" }}>{this.state.surnameError}</div>

          <TextField
            name="department"
            id="outlined-basic"
            label="DEPARTMENT"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.department}
          />
          <div style={{ color: "red" }}>{this.state.departmentError}</div>

          <Checkbox
            value="uncontrolled"
            inputProps={{ "aria-label": "uncontrolled-checkbox" }}
          />
          <Button type="submit">add employee</Button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
