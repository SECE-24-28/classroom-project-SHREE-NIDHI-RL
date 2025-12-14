import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login</h2>

      <form>
        <div>
          <label>Username</label><br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input type="password" />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <br />

      <p>
        Don't have an account?
        <Link to="/signup"> Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
