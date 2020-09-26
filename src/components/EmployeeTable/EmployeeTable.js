import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th
            onClick={props.handleSortClick}
            name="name"
          >
            Name
          </th>
          <th
            onClick={props.handleSortClick}
            name="occupation"
          >
            Occupation
          </th>
          <th
            onClick={props.handleSortClick}
            name="location"
          >
            Location
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(item => (
          <tr key={item.id}>
            <td><img alt={item.name} src={item.image} /></td>
            <td>{item.name}</td>
            <td>{item.occupation}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default EmployeeTable;