import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default",
  // noop setter to avoid undefined when provider isn't used in tests
  setUserName: () => {},
});

export default UserContext;
