export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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
