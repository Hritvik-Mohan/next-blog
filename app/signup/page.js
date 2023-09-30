import Link from "next/link";

export default function Login() {
  return (
    <form className="login">
      <h2 className="">Sign Up</h2>
      <label>Username</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="submit" className="submit" />
      <div>
          <Link href="login">Already have an account?</Link>
      </div>
    </form>
  );
}
