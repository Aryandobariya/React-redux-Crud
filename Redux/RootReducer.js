import { Countreducer2 } from "./Count2/Reducer";
import { CountReducer } from "./Count/CountReducer";
import { combineReducers } from "redux";
import { Userreducer } from "./User/Reducer";

export const Rootreducer = combineReducers({
  // COUNT1: CountReducer,
  // COUNT2: Countreducer2,
  USER: Userreducer,
});
