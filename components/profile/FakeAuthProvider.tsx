"use client";
import React, { useState } from "react";
import { FakeAuthContext } from "../context/FakeAuthContext";

export default function FakeAuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "John",
    email: "test@example.com",
    gender: "male",
    address: "Yangon",
    points: 100,
  });
  return (
    <FakeAuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </FakeAuthContext.Provider>
  );
}
