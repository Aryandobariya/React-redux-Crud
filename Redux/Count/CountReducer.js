import { INC } from "./Constant";

 export const CountReducer = (state = {x: 0 }, action) => {
  switch (action.type) {
    case INC:
      return { x: state.x + 1 };

    default:
        return state
  }
};
