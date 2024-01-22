import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { UserIcon } from "./Icons";

export function SettingsUser() {
  const [isOpen, setIsOpen] = useState(false);
  const { setUser } = useUser();

  return (
    <>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        <UserIcon />
      </button>

      {isOpen && (
        <section className="absolute top-20 right-6 w-40 py-2 bg-accent-antiflash-white rounded-2xl shadow-lg">
          <button className="w-full px-4 py-2 text-left hover:bg-primary-ruddy-blue/10">
            Settings
          </button>

          <button
            onClick={() => setUser(null)}
            className="w-full px-4 py-2 text-left hover:bg-primary-ruddy-blue/10"
          >
            Logout
          </button>
        </section>
      )}
    </>
  );
}
