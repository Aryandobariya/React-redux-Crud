import { INC, INC_BY_VAL } from "./Constat";

export const Countreducer2 = (state = { count: 1 }, action) => {
  // console.log("🚀 ~ file: Reducer.js:9 ~ Countreducer2 ~ paylod:", action.paylod)
  switch (action.type) {
    case INC:
      return { count: state.count + 3 };
    case INC_BY_VAL:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
