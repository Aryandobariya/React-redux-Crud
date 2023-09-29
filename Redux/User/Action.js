// import { type } from "jquery";
import { ADD_USER } from "./Constans";

export const Adduser = (data) => {
  console.log("🚀 ~ file: Action.js:5 ~ Adduser ~ data:", data)
  return {
    type: ADD_USER,
    payload: data,
  };
};
