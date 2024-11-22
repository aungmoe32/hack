import { createContext, Dispatch, SetStateAction } from "react";

export const FakeAuthContext = createContext({
  user: false,
  setUser: (v) => {},
  authenticated: false,
  setAuthenticated: (v) => {},
});
