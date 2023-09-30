import Link from "next/link";

export default function Login() {
  return (
    <form className="login">
      <h2 className="">Login</h2>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="submit" className="submit" />
      <div>
          <Link href="signup">Create a new account.</Link>
      </div>
    </form>
  );
}
