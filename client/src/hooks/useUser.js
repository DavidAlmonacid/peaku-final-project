import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

export function useUser() {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
}
