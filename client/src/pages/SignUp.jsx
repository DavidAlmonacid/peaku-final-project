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
    <form onSubmit={handleSubmit}>
      <div
        className="flex flex-col gap-7 max-w-md *:bg-accent-antiflash-white *:text-accent-night *:h-9 *:px-4 *:rounded-xl *:focus-within:outline-primary-royal-blue"
        style={{ colorScheme: "light" }}
      >
        <input type="text" name="name" placeholder="Name *" />
        <input type="text" name="last_name" placeholder="Last name *" />
        <input
          type="email"
          name="email"
          pattern="\w+@\w+\.\w+"
          placeholder="Email address *"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password *"
        />
      </div>

      <input type="submit" value="Sign Up" />
    </form>
  );
}
