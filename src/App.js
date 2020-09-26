import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import SearchForm from "./components/SearchForm/SearchForm";
import Employees from "./employees.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


class App extends React.Component {
  state = {
    employees: Employees,
    search: ""
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const employees = this.state.employees;
    let query = this.state.search;

    console.log("Query: " + query);

    const searchEmployee = employees.filter(result => result.name.toLowerCase().includes(query.toLowerCase()))

    if (searchEmployee.length === 0) {
      // When no match is found
      console.log("No match");
      this.setState({
        employees: Employees,
        search: ""
      });
      alert("No match found! Please try again!");

    } else if (query === "") {
      // When no input is detected
      console.log("No query entered");
      this.setState({
        employees: Employees,
        search: ""
      });
      alert("No query entered! Please try again!");

    } else {
      console.log(searchEmployee);
      this.setState({
        employees: searchEmployee,
        search: ""
      })
    }
  }

  handleSortClick = event => {
    event.preventDefault();
    console.log("click");
    console.log(this.state.name)
  }

  render() {

    return (
      <Wrapper>
        <Jumbotron fluid>
          <Container>
            <h1>Employee Directory</h1>
            <h5>How to use?</h5>
            <ol>
              <li>Enter a name to search employee OR</li>
              <li>Click on the table headers (Name, Occupation and Location) to sort them ascendingly or descendingly.</li>
              <li>To reset search list, simply submit the form again to reload the full list</li>
            </ol>
          </Container>
        </Jumbotron>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmployeeTable
          employees={this.state.employees}
          handleSortClick={this.handleSortClick}
        />
      </Wrapper>
    );
  }
}

export default App;
