import { Link } from "react-router-dom";
import Header from '../../components/header/Header'

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <form className="login-form" >
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button className="btn-primary" type="submit">Log in</button>
          <div className="link">
            <Link to="/register" className="signup">
              Don`&apos;`t have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;