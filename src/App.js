import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table/Table";
import employees from "./employees.json";

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
        <Table employees={this.state.employees} handleSortClick={this.handleSortClick} />
      </Wrapper>
    );
  }
}

export default App;
