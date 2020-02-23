import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", surname: "", department: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
    this.setState({ [event.target.department]: event.target.value });
    this.setState({ [event.target.surname]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newEmployee = this.state;
    this.props.createNewEmployee(newEmployee);
  };

  render() {
    //const classes = useStyles();
    //className={classes.root}
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <div>
            <TextField
              name="id"
              id="outlined-basic"
              label="ID"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.id}
            />
            <TextField
              name="name"
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <TextField
              name="surname"
              id="outlined-basic"
              label="SURNAME"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.surname}
            />
            <TextField
              name="department"
              id="outlined-basic"
              label="DEPARTMENT"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.department}
            />
            <Button type="submit">add employee</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeList;
