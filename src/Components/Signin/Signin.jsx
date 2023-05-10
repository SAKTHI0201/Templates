import React, { useContext } from "react";
import {UserContext} from "../Context/Contextprovider";

function Signin() {
  const { Email, setEmail, Password, setPassword } = useContext(UserContext);

  const handleSignin = () => {};
  return (
    <>
      <div className="Signin">
        <div className="Signin-Container">
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
        <button onClick={handleSignin}>Signin</button>
      </div>
    </>
  );
}

export default Signin;
