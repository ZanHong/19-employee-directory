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
    search: "",
    sortByName: "ascending",
    sortByOccupation: "ascending",
    sortByLocation: "ascending",
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

    const header = event.target.getAttribute("name")

    this.sorting(header);
  }

  sorting = type => {
    console.log(type)
    let employees = this.state.employees;

    // Sorting by Name
    if (type === "name") {
      let sortByName = employees.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1
        }
        return 0;
      })

      if (this.state.sortByName === "ascending") {
        this.setState({
          employees: sortByName,
          sortByName: "descending"
        })
      } else if (this.state.sortByName === "descending") {
        sortByName = sortByName.reverse();
        this.setState({
          employees: sortByName,
          sortByName: "ascending"
        })
      }
    }

    // Sorting by Occupation
    if (type === "occupation") {
      let sortByOccupation = employees.sort((a, b) => {
        if (a.occupation.toLowerCase() < b.occupation.toLowerCase()) {
          return -1
        } else if (a.occupation.toLowerCase() > b.occupation.toLowerCase()) {
          return 1
        }
        return 0;
      })

      if (this.state.sortByOccupation === "ascending") {
        this.setState({
          employees: sortByOccupation,
          sortByOccupation: "descending"
        })
      } else if (this.state.sortByOccupation === "descending") {
        sortByOccupation = sortByOccupation.reverse();
        this.setState({
          employees: sortByOccupation,
          sortByOccupation: "ascending"
        })
      }
    }

    // Sorting by Location
    if (type === "location") {
      let sortByLocation = employees.sort((a, b) => {
        if (a.location.toLowerCase() < b.location.toLowerCase()) {
          return -1
        } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
          return 1
        }
        return 0;
      })

      if (this.state.sortByLocation === "ascending") {
        this.setState({
          employees: sortByLocation,
          sortByLocation: "descending"
        })
      } else if (this.state.sortByLocation === "descending") {
        sortByLocation = sortByLocation.reverse();
        this.setState({
          employees: sortByLocation,
          sortByLocation: "ascending"
        })
      }
    }
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
