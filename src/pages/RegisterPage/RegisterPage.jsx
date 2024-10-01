import { Link } from "react-router-dom";
import Header from '../../components/header/Header'

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <form className="register-form" >
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            required
          />
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
          <button className="btn-primary" type="submit">Sign Up</button>
          <div className="link">
            <Link to="/login" className="signup">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;