import React, { useState } from "react";
import { connect } from "react-redux";
import { addcount, incbydata } from "./Count2/Action";

function Newcount(props) {
  let [number, setnumber] = useState(0);
  console.log("🚀 ~ file: Newcount.jsx:5 ~ Newcount ~ props:", props)

  function data(e){
  setnumber(e.target.value)
  }
  return (
    <>
      <h1>count is {props.count.COUNT2.count}</h1>
      <button onClick={() => props.addcount()}>addd</button>

      <input type="text" onChange={(e)=>data(e)} />
      <button onClick={()=>props.incbydata(number)}>addd</button>
    </>
  );
}

const toStateproops = (state) => {
  // console.log("---", state);
  return {
    count: state,
  };
};

const toDispatch = (Dispatch) => {
  return { addcount: () => Dispatch(addcount()) };
};

export default connect(toStateproops, toDispatch)(Newcount);
