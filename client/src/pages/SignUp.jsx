export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="username" />
      </label>

      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}
