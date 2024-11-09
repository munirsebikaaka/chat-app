import { useState } from "react";
import Login from "./login";
import "./storeLog";

const oldAcounts = [
  { fullName: "rex", phoneNum: "54321" },
  { fullName: "shadia", phoneNum: "21456" },
  { fullName: "paul", phoneNum: "54123" },
  { fullName: "drizy", phoneNum: "84301" },
  { fullName: "moxhus", phoneNum: "57320" },
];
const me = [{ fullName: "codesmann", phoneNum: "07420", password: "" }];

function App() {
  const [chat1, setChat1] = useState("");
  const [chatOb1, setChatOb1] = useState([{}]);
  const [chat2, setChat2] = useState("");
  const [chatOb2, setChatOb2] = useState([{}]);
  const [seeFrindChat, setSeeFriendChat] = useState(false);
  const [personChat, setPersonChat] = useState([{}]);
  const [seeOrHideAllChats, setSeeOrHideAllChats] = useState(false);

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

  const showHideFriendChat = () => {
    setSeeFriendChat((set) => !set);
  };

  const seeAllChats = () => {
    setSeeOrHideAllChats((see) => !see);
  };

  const selectFriendFromOldFriends = (phoneNum) => {
    oldAcounts.map(
      (el) => el.phoneNum === phoneNum && setPersonChat([...personChat, el])
    );
  };

  return (
    <div>
      {/* <Login /> */}

      <div>
        <Owner
          chat1={chat1}
          setChat1={setChat1}
          onPushToChats={onPushToChats}
          seeFrindChat={seeFrindChat}
          onHideShowFriendChat={showHideFriendChat}
          chatOb1={chatOb1}
          chatOb2={chatOb2}
          onSeeAllChats={seeAllChats}
        />
        <Friend
          chat2={chat2}
          setChat2={setChat2}
          chatOb1={chatOb1}
          chatOb2={chatOb2}
          onPushToChats2={onPushToChats2}
          seeFrindChat={seeFrindChat}
          personChat={personChat}
        />
      </div>
      <AllCharts
        onSelectFriendFromOldFriends={selectFriendFromOldFriends}
        seeOrHideAllChats={seeOrHideAllChats}
      />
    </div>
  );
}

const Owner = ({
  chat1,
  setChat1,
  onPushToChats,
  chatOb1,
  chatOb2,
  onHideShowFriendChat,
  seeFrindChat,
  onSeeAllChats,
}) => {
  return (
    <div>
      <button onClick={onHideShowFriendChat}>
        {!seeFrindChat ? "see friend chat" : "hide friend chat"}
      </button>
      <button onClick={onSeeAllChats}>find chats</button>
      <ul>
        {me.map((el) => (
          <li key={el.fullName}>
            <span>{el.fullName}</span>
            <span>{el.phoneNum}</span>
          </li>
        ))}
      </ul>
      <Chats chatOb1={chatOb1} chatOb2={chatOb2} />

      <div>
        <input
          type="text"
          value={chat1}
          onChange={(e) => setChat1(e.target.value)}
        />
        <button onClick={onPushToChats}>onclick</button>
      </div>
    </div>
  );
};

const Friend = ({
  chat2,
  setChat2,
  onPushToChats2,
  chatOb1,
  chatOb2,
  seeFrindChat,
  personChat,
}) => {
  return (
    <>
      {seeFrindChat ? (
        <>
          <ul>
            {personChat.map((el) =>
              el.fullName ? (
                <li key={el.fullName}>
                  <span>{el.fullName}</span>
                  <span>{el.phoneNum}</span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <Chats chatOb1={chatOb1} chatOb2={chatOb2} />

          <div>
            <input
              type="text"
              value={chat2}
              onChange={(e) => setChat2(e.target.value)}
            />
            <button onClick={onPushToChats2}>onChange</button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const Chats = ({ chatOb1, chatOb2 }) => {
  return (
    <div className="chatsBoard">
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
    </div>
  );
};

const AllCharts = ({ onSelectFriendFromOldFriends, seeOrHideAllChats }) => {
  return (
    <div>
      {seeOrHideAllChats && (
        <ul>
          {oldAcounts.map((el) => (
            <li
              className="friend"
              key={el.fullName}
              onClick={() => onSelectFriendFromOldFriends(el.phoneNum)}
            >
              {el.fullName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
