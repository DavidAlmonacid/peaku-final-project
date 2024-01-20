import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

export function useUser() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return { isLoggedIn, setIsLoggedIn };
}
