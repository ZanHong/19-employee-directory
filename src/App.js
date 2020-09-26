import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table/Table";
import employees from "./employees.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  state = {
    employees: employees,
    result: []
  }

  handleSortClick = event => {
    event.preventDefault();
    console.log("click")
  }

  render() {
    console.log(this.state.employees);

    return (
      <Wrapper>
        <Jumbotron fluid>
          <Container>
            <h1>Employee Directory</h1>
            <p>
              Click on the table headers to sort them ascendingly or descendingly.
            </p>
          </Container>
        </Jumbotron>
        <Table employees={this.state.employees} handleSortClick={this.handleSortClick} />
      </Wrapper>
    );
  }
}

export default App;
