import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await response.json();
    console.log(json);

    if (json.error) {
      setError(json.message);
      return;
    }

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <section className="flex flex-col items-center gap-y-14 px-6 py-12 bg-accent-timberwolf w-full max-w-lg mx-3 rounded-3xl">
        <h1 className="text-4xl font-semibold">Create an account</h1>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              className="capitalize text-accent-night h-9 px-4 rounded-xl focus:outline-primary-royal-blue w-full"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name *"
              className="capitalize text-accent-night h-9 px-4 rounded-xl focus:outline-primary-royal-blue w-full"
              required
            />
            <div>
              <input
                type="email"
                name="email"
                pattern="\w+@\w+\.\w{2,3}"
                placeholder="Email address *"
                className="text-accent-night h-9 px-4 rounded-xl focus:outline-primary-royal-blue w-full"
                required
              />
              {error && error.includes("email") && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
              )}
              {error && error === "Error creating user" && (
                <p className="mt-1 text-sm text-red-500">
                  {error + ", try with another email"}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password *"
                className="text-accent-night h-9 px-4 rounded-xl focus:outline-primary-royal-blue w-full"
                required
              />
              {error && error.includes("Password") && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-11 bg-primary-royal-blue text-accent-antiflash-white text-lg font-medium h-10 w-full rounded-xl"
          >
            Create Account
          </button>
        </form>

        <p className="flex gap-x-2 text-sm font-medium">
          <span>Already have an account?</span>
          <Link to="/login" className="text-primary-royal-blue">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
