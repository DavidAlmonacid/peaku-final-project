import { useState } from "react";
import { Toaster, toast } from "sonner";
import { BASE_URL } from "../config.js";

async function createUser({ data }) {
  const response = await fetch(`${BASE_URL}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }

  return await response.json();
}

export function SignUp() {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    toast.promise(createUser({ data }), {
      loading: "Creating account...",

      success: (data) => {
        setError({
          status: false,
          message: "",
          type: ""
        });
        event.target.reset();

        return data.message;
      },

      error: (error) => {
        setError({
          status: true,
          message: error.message,
          type: error.message.toLowerCase().includes("password")
            ? "password"
            : "email"
        });

        return error.message;
      },

      classNames: { title: "text-base" }
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <section className="flex flex-col items-center gap-y-14 px-6 py-12 bg-accent-timberwolf w-full max-w-lg mx-3 rounded-2xl">
        <h1 className="text-4xl font-semibold">Create an account</h1>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              className="capitalize text-accent-night h-9 px-3 rounded-xl focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray"
              autoFocus
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name *"
              className="capitalize text-accent-night h-9 px-3 rounded-xl focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray"
              required
            />
            <div>
              <input
                type="email"
                name="email"
                pattern="\w+@\w+\.\w{2,3}"
                placeholder="Email address *"
                className={`text-accent-night h-9 px-3 rounded-xl focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray ${error.status && error.type === "email" && "ring-2 ring-red-500 focus:outline-red-500"}`}
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
                className={`text-accent-night h-9 px-3 rounded-xl focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray ${error.status && error.type === "password" && "ring-2 ring-red-500 focus:outline-red-500"}`}
                required
              />
              {error.status && error.type === "password" && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-11 bg-primary-royal-blue text-accent-antiflash-white text-lg font-medium h-10 w-full rounded-xl disabled:opacity-60"
          >
            Create Account
          </button>
        </form>
      </section>

      <Toaster visibleToasts={1} duration={7000} theme="dark" richColors />
    </div>
  );
}
