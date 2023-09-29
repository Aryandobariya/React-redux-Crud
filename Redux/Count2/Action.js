import { INC, INC_BY_VAL, INC_COUNT } from "./Constat";

export const inccount = () => {
  return {
    type: INC_COUNT,
  };
};
export const addcount = () => {
  return {
    type: INC,
  };
};
export const incbydata = (no) => {
  return {
    type: INC_BY_VAL,
    payload: no,
  };
};
