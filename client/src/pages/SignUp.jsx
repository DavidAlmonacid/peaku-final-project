export default function SignUp() {
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
  };

  return (
    <div className="flex justify-center items-center h-full">
      <section className="flex flex-col items-center gap-y-14 px-6 py-12 bg-accent-antiflash-white/20 backdrop-blur-sm w-full max-w-lg mx-3 rounded-3xl">
        <h1 className="text-4xl font-semibold">Create an account</h1>

        <form className="w-full" onSubmit={handleSubmit}>
          <div
            className="flex flex-col gap-y-6 *:bg-accent-antiflash-white *:text-accent-night *:w-full *:h-9 *:px-4 *:rounded-xl *:focus-within:outline-primary-royal-blue"
            style={{ colorScheme: "light" }}
          >
            <input type="text" name="name" placeholder="Name *" required />
            <input
              type="text"
              name="last_name"
              placeholder="Last name *"
              required
            />
            <input
              type="email"
              name="email"
              pattern="\w+@\w+\.\w{2,3}"
              placeholder="Email address *"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password *"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-11 bg-primary-royal-blue text-accent-antiflash-white text-lg font-medium h-10 w-full rounded-xl"
          >
            Create Account
          </button>
        </form>

        <p className="flex gap-x-3 text-sm">
          <span>Already have an account?</span>
          <button>Login</button>
        </p>
      </section>
    </div>
  );
}
