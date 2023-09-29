import React from "react";
import { add } from "./Count/CountAction";
import { connect } from "react-redux";

function Count(props) {
  console.log("--------->>>>>>:", props);
  return (
    <>
      <h1>count is {props.count.COUNT1.x}</h1>
      <button onClick={()=>props.add()}>incriment</button>
    </>
  );
}

const toStateproops = (state) => {
  // console.log("---->>>>>>", state.COUNT1)
  return {
    count: state,
  };
};

const toDispatch = (Dispatch) => {
  //   const add = () => {

  //   };
  return { add: () => Dispatch(add()) };
};

export default connect(toStateproops, toDispatch)(Count);
