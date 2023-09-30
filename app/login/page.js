export default function Login() {
  return (
    <form className="login">
      <h2 className="">Login</h2>
      <label>Username</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="submit" className="submit" />
    </form>
  );
}
