import React, { useState, createContext } from "react";
export const UserContext = createContext();

function Contextprovider({ children }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Conformpassword, setConformpassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        Email,
        setEmail,
        Password,
        setPassword,
        Conformpassword,
        setConformpassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default Contextprovider;
