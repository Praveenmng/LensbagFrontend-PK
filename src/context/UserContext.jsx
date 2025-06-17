import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../axiosInstance"; // Adjust the import path as necessary

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [checking, setChecking] = useState(true);

  const [hasECompany, setHasECompany] = useState(false);
  const [ecompanyId, setEcompanyId] = useState(null);

  // ✅ Reusable status fetcher
  const refreshUserStatus = () => {
    setChecking(true);
    console.log("🔄 Refreshing session and eCompany status...");
    axios.get("/api/user/status", { withCredentials: true })
      .then(response => {
        const { user_id, username } = response.data;
        if (user_id && username) {
          setLogin(true);
          setUserName(username);
          setUserId(user_id);
          console.log("✅ Logged in as:", username, "(ID:", user_id + ")");

          // Fetch eCompany info
          axios.get("/api/user/ecompany", { withCredentials: true })
            .then(res => {
              console.log("📦 /api/user/ecompany response:", res.data);
              setHasECompany(res.data.hasECompany);
              setEcompanyId(res.data.ecompanyId || null);
            })
            .catch(err => {
              console.error("❌ ECompany check failed:", err.message);
              setHasECompany(false);
              setEcompanyId(null);
            });
        } else {
          console.warn("⚠️ Invalid session data:", response.data);
          resetUserState();
        }
      })
      .catch(err => {
        console.error("❌ Error fetching user status:", err.message);
        resetUserState();
      })
      .finally(() => {
        setChecking(false);
      });
  };

  // Helper to clear state
  const resetUserState = () => {
    setLogin(false);
    setUserName(null);
    setUserId(null);
    setHasECompany(false);
    setEcompanyId(null);
  };

  useEffect(() => {
    refreshUserStatus(); // Initial check on app load
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        userName,
        setUserName,
        userId,
        setUserId,
        checking,
        hasECompany,
        setHasECompany,
        ecompanyId,
        setEcompanyId,
        refreshUserStatus, // ✅ Now exposed for external use
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
