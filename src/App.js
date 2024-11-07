import { useReducer, useState } from "react";

function App() {
  const [chat1, setChat1] = useState("");
  // const [chatOb1, setChatOb1] = useState([{}]);
  const [chat2, setChat2] = useState("");
  // const [chatOb2, setChatOb2] = useState([{}])

  const reducer = (state, action) => {
    if (action.type === "chat1" && state.cont === chat1) {
      setChat1("");
    } else if (action.type === "chat2" && state.cont === chat2) {
      setChat2("");
    }
    switch (action.type) {
      case "chat1":
        return [
          ...state,
          { cont: chat1, id: Date.now(), time: new Date().getHours() },
        ];

      case "chat2":
        return [
          ...state,
          { cont: chat2, id: Date.now(), time: new Date().getHours() },
        ];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [{}]);

  // const onPushToChats = function () {
  //   setChatOb1([
  //     ...chatOb1,
  //     { cont: chat1, id: Date.now(), time: new Date().getHours() },
  //   ]);
  // };

  // const onPushToChats2 = function () {
  //   setChatOb2([
  //     ...chatOb2,
  //     { cont: chat2, id: Date.now(), time: new Date().getHours() },
  //   ]);
  // };

  return (
    <div className="chatsBoard">
      <div>
        <ul>
          {state.map((el) =>
            el.cont !== chat2 && el.cont ? (
              <li key={el.cont}>
                <span>{el.cont}</span>
                <span>{el.time}</span>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <div>
          <input
            type="text"
            value={chat1}
            onChange={(e) => setChat1(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({ type: "chat1" });
              state.map((el) => el.cont === chat1 && setChat1(""));
            }}
          >
            onclick
          </button>
        </div>
      </div>
      <div>
        <ul>
          {state.map((el) =>
            el.cont !== chat1 && el.cont ? (
              <li key={el.cont}>
                <span>{el.cont}</span>
                <span>{el.time}</span>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <input
          type="text"
          value={chat2}
          onChange={(e) => setChat2(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "chat2" })}>onChange</button>
      </div>
    </div>
  );
}

export default App;
