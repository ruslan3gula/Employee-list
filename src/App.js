import React, { Component } from "react";

import "./App.css";
import EmployeeForm from "./EmployeeForm";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: "01", name: "John", surname: "V", department: "LOG" },
        { id: "02 ", name: "Ruslan", surname: "G", department: "MFO" },
        { id: "03", name: "Andriy", surname: "M", department: "DEV" },
        { id: "04", name: "Jupiter", surname: "O", department: "ENG" }
      ],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.state.employees
    });
  }

  createNewEmployee = newEmployee => {
    this.setState(prevState => ({
      employees: [...prevState.employees, newEmployee],
      filtered: this.state.employees
    }));

    console.log("Employee");
    console.log(this.state.employees);
    console.log("FILTERED");
    console.log(this.state.filtered);
  };

  sortBySurname = () => {
    const sortedArray = this.state.employees.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    this.setState(() => ({
      employees: [...sortedArray]
    }));
  };

  handleChange(e) {
    const searchText = e.target.value ? e.target.value.toLowerCase() : "";

    const filteredEmployee = this.state.employees.filter(employee => {
      const hasName = employee.name.toLowerCase().includes(searchText);
      const hasSurname = employee.surname.toLowerCase().includes(searchText);
      const hasDepartment = employee.department
        .toLowerCase()
        .includes(searchText);
      return hasName || hasSurname || hasDepartment;
    });

    this.setState(() => ({
      filtered: filteredEmployee
    }));
  }

  render() {
    // const classes = useStyles();

    return (
      <div className="App">
        <TextField
          onChange={this.handleChange}
          id="standard-search"
          label="Search field"
          type="search"
        />

        <EmployeeForm createNewEmployee={this.createNewEmployee} />

        <List>
          {this.state.filtered.map((employee, index) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <ListItemText
                primary={employee.surname}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {employee.name}
                    </Typography>
                    {employee.department}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" onClick={this.sortBySurname}>
          Sort by Date
        </Button>
      </div>
    );
  }
}

export default App;
