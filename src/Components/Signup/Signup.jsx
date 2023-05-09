import React, { useContext } from "react";
import ContextProvider from "../Context/Contextprovider";

function Signup() {
  const {
    Email,
    setEmail,
    Password,
    setPassword,
    Conformpassword,
    setConformpassword,
  } = useContext(ContextProvider);

  const handleSignup = () => {
    if (!Email || !Password || !Conformpassword) {
      alert("Email or Password or Conform-Password filed is empty");
    } else if (Password === Conformpassword) {
      alert("Password Don't match");
    } else {
      console.log("login");
    }
  };
  return (
    <>
      <div className="Signup">
        <div className="Signup-Container">
          <div className="Email">
            <div className="Email-Title">Email</div>
            <input
              type="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="Password-Container">
          <div className="Password-Title">Password</div>
          <input
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Conformpassword-Container">
          <div className="Conformpassword-Title">Confrom-Password</div>
          <input
            type="Password"
            value={Conformpassword}
            onChange={(e) => setConformpassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </>
  );
}

export default Signup;
