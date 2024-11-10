const Login = ({
  firstName,
  password,
  phoneNum,
  setFirstName,
  setPassword,
  setPhoneNum,
  onLoginToApplication,
  hideLogin,
  logError,
}) => {
  return (
    <>
      {!hideLogin ? (
        <div>
          <h1>{logError}</h1>
          <p>enter your names</p>
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
          <button onClick={onLoginToApplication}>onclick</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Login;
