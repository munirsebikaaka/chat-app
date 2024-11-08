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
//////////////////////////////////////////////////////////////////////////////
function keepAcounts() {
  if (register.fullName && register.password && register.phoneNum) {
    client = [
      ...client,
      {
        fullName: register.fullName,
        password: register.password,
        phoneNum: register.phoneNum,
      },
    ];
  }
}
keepAcounts();
