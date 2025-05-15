// src/context/UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ login, setLogin, userName, setUserName, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
