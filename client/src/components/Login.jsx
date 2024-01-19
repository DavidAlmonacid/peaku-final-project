async function fetchUser({ data }) {
  const response = await fetch("http://localhost:3001/api/users", {
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

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const user = fetchUser({ data });
    console.log(user);
  };

  return (
    <div className="absolute right-32 top-20 bg-neutral-300 px-4 pt-6 pb-8 w-full max-w-xs rounded-2xl shadow-lg">
      <h3 className="text-3xl font-semibold mb-6">Login</h3>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-6">
          <input
            type="email"
            name="email"
            pattern="\w+@\w+\.\w{2,3}"
            placeholder="Email address *"
            className="text-accent-night h-8 px-3 rounded-lg focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray"
            autoFocus
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password *"
            className="text-accent-night h-8 px-3 rounded-lg focus:outline-primary-royal-blue w-full placeholder:text-accent-slate-gray"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-7 bg-primary-royal-blue text-accent-antiflash-white text-base font-medium h-9 w-full rounded-xl disabled:opacity-60"
        >
          Login
        </button>
      </form>
    </div>
  );
}
