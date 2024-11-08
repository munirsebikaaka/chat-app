import { useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <div>
      <p>firstName</p>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>password</p>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>phoneNum</p>

      <input
        type="number"
        value={phoneNum}
        onChange={(e) => setPhoneNum(+e.target.value)}
      />
      <button>onclick</button>
    </div>
  );
};
export default Login;
