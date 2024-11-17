import { useState } from "react";
import Login from "./login";
import "./storeLog";

const oldAcounts = [
  { fullName: "rex", phoneNum: "54321", img: "people/rex.jpg" },
  { fullName: "shadia", phoneNum: "21456", img: "people/shadia.jpg" },
  { fullName: "paul", phoneNum: "54123", img: "people/paul.jpg" },
  { fullName: "drizy", phoneNum: "84301", img: "people/drizzie.jpg" },
  { fullName: "moxhus", phoneNum: "57320", img: "people/moxhus.png" },
];

function App() {
  const [chat1, setChat1] = useState("");
  const [chatOb1, setChatOb1] = useState([{}]);
  const [chat2, setChat2] = useState("");
  const [chatOb2, setChatOb2] = useState([{}]);
  const [personChat, setPersonChat] = useState([{}]);
  const [seeOrHideAllChats, setSeeOrHideAllChats] = useState(false);
  const [seeHideFriendChats, setSeeHideFriendChats] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [checkInputs, setCheckInputs] = useState(false);
  const [hideLogin, setHideLogin] = useState(false);
  const [logError, setLogError] = useState("");

  const [hideIntro, setHideIntro] = useState(false);

  const me = [
    {
      fullName: firstName,
      phoneNum: phoneNum,
      password: password,
      img: "people/codesmann.jpg",
    },
  ];

  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const time = `${hour}:${min}`;

  const chatsRecieveSendFunctionallity = (
    setChatObj,
    chatObj,
    chats,
    resetChat
  ) => {
    setChatObj([...chatObj, { cont: chats, id: Date.now(), time: time }]);
    resetChat("");
  };

  const onPushToChats = function () {
    chatsRecieveSendFunctionallity(setChatOb1, chatOb1, chat1, setChat1);
  };

  const onPushToChats2 = function () {
    chatsRecieveSendFunctionallity(setChatOb2, chatOb2, chat2, setChat2);
  };

  const seeAllChats = () => {
    setSeeOrHideAllChats((see) => !see);
  };

  const selectFriendFromOldFriends = (phoneNum) => {
    oldAcounts.map(
      (el) => el.phoneNum === phoneNum && setPersonChat([...personChat, el])
    );
    setSeeOrHideAllChats((see) => !see);
    // setHideIntro(true);
  };

  const seeFriendAcc = () => {
    setSeeHideFriendChats((SEE) => !SEE);
  };

  const loginToApplication = () => {
    if (!firstName) setLogError("Please input names!");
    if (!password) setLogError("Please input password!");
    if (!phoneNum) setLogError("Please input phone number!");
    if (firstName && phoneNum && password) setCheckInputs(true);

    if (firstName && phoneNum && password) setHideLogin(true);
  };

  return (
    <div className="mainApp">
      {/* <Login
        firstName={firstName}
        phoneNum={phoneNum}
        password={password}
        setFirstName={setFirstName}
        setPassword={setPassword}
        setPhoneNum={setPhoneNum}
        onLoginToApplication={loginToApplication}
        hideLogin={hideLogin}
        logError={logError}
      /> */}
      {/* {checkInputs ? ( */}
      <Introduction
        onSeeAllChats={seeAllChats}
        onSeeFriendAcc={seeFriendAcc}
        firstName={firstName}
        // hideIntro={hideIntro}
        seeHideFriendAcc={seeHideFriendChats}
      />
      {/* ) : (
        ""
      )} */}

      <div className="main">
        {!seeHideFriendChats ? (
          <Friend
            chat2={chat2}
            setChat2={setChat2}
            chatOb1={chatOb1}
            chatOb2={chatOb2}
            onPushToChats2={onPushToChats2}
            personChat={personChat}
          />
        ) : (
          <Owner
            chat1={chat1}
            setChat1={setChat1}
            onPushToChats={onPushToChats}
            chatOb1={chatOb1}
            chatOb2={chatOb2}
            seeHideFriendAcc={seeHideFriendChats}
            me={me}
          />
        )}
      </div>
      <AllCharts
        onSelectFriendFromOldFriends={selectFriendFromOldFriends}
        seeOrHideAllChats={seeOrHideAllChats}
      />
    </div>
  );
}

const Introduction = ({
  onSeeAllChats,
  onSeeFriendAcc,
  hideIntro,
  firstName,
  seeHideFriendAcc,
}) => {
  return (
    <>
      {!hideIntro ? (
        <div className="firstSight">
          <h1>Hello and Welcome Mr/Mrs {firstName} to the simple Chat App</h1>
          <button className="findChats" onClick={onSeeAllChats}>
            find chats
          </button>
          <button onClick={onSeeFriendAcc}>
            {seeHideFriendAcc ? "your chats" : "see freind"}{" "}
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const Friend = ({
  chat2,
  setChat2,
  onPushToChats2,
  chatOb1,
  chatOb2,
  personChat,
}) => {
  return (
    <div className="person">
      <ul>
        {personChat.map((el) =>
          el.fullName ? (
            <li className="span">
              <img src={el.img} />
              <span>{el.fullName}</span>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <Chats chatOb1={chatOb1} chatOb2={chatOb2} />

      <div className="textInput">
        <input
          type="text"
          value={chat2}
          onChange={(e) => setChat2(e.target.value)}
        />
        <button onClick={onPushToChats2}>send</button>
      </div>
    </div>
  );
};

const styles = {
  backgroundImage: `url('people/back-img.jpg')`,
  backgroundSize: "cover",
};

const Chats = ({ chatOb1, chatOb2 }) => {
  return (
    <div className="chatsBoard chatOner" style={styles}>
      <ul>
        {chatOb2.map((el) =>
          el.cont ? (
            <li className="chat1 chat" key={el.cont}>
              <span className="cont">{el.cont}</span>
              <span className="time">{el.time}</span>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <ul className="secChat">
        {chatOb1.map((el) =>
          el.cont ? (
            <li className="chat2 chat" key={el.cont}>
              <span className="cont">{el.cont}</span>
              <span className="time">{el.time}</span>
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
              <img src={el.img} />
              <span className="span">{el.fullName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Owner = ({
  me,
  chat1,
  setChat1,
  onPushToChats,
  chatOb1,
  chatOb2,
  seeHideFriendAcc,
}) => {
  return (
    <>
      {seeHideFriendAcc ? (
        <div className="owner person">
          <ul>
            {me.map((el) => (
              <li key={el.fullName}>
                <img src={el.img} alt="codesmann img" />
                <span className="span">{el.fullName}</span>
              </li>
            ))}
          </ul>
          <Chats chatOb1={chatOb1} chatOb2={chatOb2} />

          <div className="textInput">
            <input
              type="text"
              value={chat1}
              onChange={(e) => setChat1(e.target.value)}
            />
            <button onClick={onPushToChats}>send</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
