import { createStore } from "redux";

const register = { fullName: "", password: "", phoneNum: "" };

const reducer = (state = register, action) => {
  switch (action.type) {
    case "fullName":
      return { ...state, fullName: action.payload };
    case "phoneNum":
      return { ...state, phoneNum: action.payload };
    case "password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

const fullName = () => {
  return { type: "fullName", payload: "codesmann" };
};
const phoneNum = () => {
  return { type: "phoneNum", payload: "7246458" };
};
const password = () => {
  return { type: "password", payload: "fdushkfbe" };
};
store.dispatch(fullName());
store.dispatch(phoneNum());
const pass = store.dispatch(password());
