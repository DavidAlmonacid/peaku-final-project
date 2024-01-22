import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser.js";
import { LoaderIcon } from "./Icons.jsx";

async function fetchUser({ data }) {
  const { email, password } = data;

  const response = await fetch(
    `http://localhost:3001/api/user?email=${email}&password=${password}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
}

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
    type: ""
  });

  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setUser({ ...user, isLoggedIn: true });
        navigate("/");
      }, 2000);
    }
  }, [isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const userResponse = await fetchUser({ data });

      setIsLoading(true);
      setError({
        status: false,
        message: "",
        type: ""
      });
      setUser(userResponse.data);
    } catch (error) {
      setError({
        status: true,
        message: error.message,
        type: error.message === "User not found" ? "email" : "password"
      });
    }
  };

  return (
    <section className="absolute top-20 right-1/2 translate-x-1/2 xs:right-8 xs:translate-x-0 sm:right-32 bg-accent-antiflash-white px-4 pt-6 pb-8 w-full max-w-xs rounded-2xl shadow-lg">
      <h3 className="text-3xl font-semibold mb-6">Login</h3>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-6">
          <div>
            <input
              type="email"
              name="email"
              pattern="\w+@\w+\.\w{2,3}"
              placeholder="Email address *"
              className={`text-accent-night h-8 px-3 rounded-lg focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray ${error.status && error.type === "email" && "ring-2 ring-red-500 focus:outline-red-500"}`}
              autoFocus
              required
            />
            {error.status && error.type === "email" && (
              <p className="mt-1 text-sm text-red-500">
                {error.message + ", try with another email"}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password *"
              className={`text-accent-night h-8 px-3 rounded-lg focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray ${error.status && error.type === "password" && "ring-2 ring-red-500 focus:outline-red-500"}`}
              required
            />
            {error.status && error.type === "password" && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-3 mt-7 bg-primary-royal-blue text-accent-antiflash-white text-base font-medium h-9 w-full rounded-xl disabled:opacity-60"
        >
          Login
          {isLoading && <LoaderIcon />}
        </button>
      </form>
    </section>
  );
}
