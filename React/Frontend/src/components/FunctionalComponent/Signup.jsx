import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h2>Signup</h2>

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

        <button type="submit">Signup</button>
      </form>

      <br />

      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Signup;
