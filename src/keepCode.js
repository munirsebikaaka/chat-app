import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "text":
      return { ...state, content: recieveChat, time: new Date().getHours() };

    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, {});