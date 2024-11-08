import { useState } from "react";
import Login from "./login";
import "./storeLog";

const oldAcounts = [
  // { fullName: "rex", phoneNum: "54321" },
  { fullName: "shadia", phoneNum: "21456" },
  // { fullName: "paul", phoneNum: "54123" },
  // { fullName: "drizy", phoneNum: "84301" },
  // { fullName: "moxhus", phoneNum: "57320" },
];

function App() {
  const [chat1, setChat1] = useState("");
  const [chatOb1, setChatOb1] = useState([{}]);
  const [chat2, setChat2] = useState("");
  const [chatOb2, setChatOb2] = useState([{}]);

  const chatsRecieveSendFunctionallity = (
    setChatObj,
    chatObj,
    chats,
    resetChat
  ) => {
    setChatObj([
      ...chatObj,
      { cont: chats, id: Date.now(), time: new Date().getHours() },
    ]);
    resetChat("");
  };

  const onPushToChats = function () {
    chatsRecieveSendFunctionallity(setChatOb1, chatOb1, chat1, setChat1);
  };

  const onPushToChats2 = function () {
    chatsRecieveSendFunctionallity(setChatOb2, chatOb2, chat2, setChat2);
  };

  return (
    <div>
      {/* <Login /> */}
      <ChatsCell
        chat1={chat1}
        chat2={chat2}
        setChat1={setChat1}
        setChat2={setChat2}
        chatOb1={chatOb1}
        chatOb2={chatOb2}
        setChatOb1={setChatOb1}
        setChatOb2={setChatOb2}
        onPushToChats={onPushToChats}
        onPushToChats2={onPushToChats2}
      />
    </div>
  );
}

const ChatsCell = ({
  chat1,
  chat2,
  chatOb1,
  chatOb2,
  setChat1,
  setChat2,
  onPushToChats,
  onPushToChats2,
}) => {
  return (
    <div className="chatsBoard">
      <div>
        <ul>
          {chatOb1.map((el) =>
            el.cont ? (
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
          <button onClick={onPushToChats}>onclick</button>
        </div>
      </div>
      <div>
        <ul>
          {chatOb2.map((el) =>
            el.cont ? (
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
        <button onClick={onPushToChats2}>onChange</button>
      </div>
    </div>
  );
};

const Friend = () => {
  return (
    <div>
      <ul>
        {oldAcounts.map((el) => (
          <li>
            <span>{el.fullName}</span>
            <span>{el.phoneNum}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
