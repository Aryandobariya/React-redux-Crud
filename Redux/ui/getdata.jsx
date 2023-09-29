import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function getdata(props) {
  return (
    <>
      <h1>USER TABLE</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.Email}</td>
                <td>{e.Password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const toStateproops = (state) => {
  return {
    data: state.USER,
  };
};

export default connect(toStateproops)(getdata);
