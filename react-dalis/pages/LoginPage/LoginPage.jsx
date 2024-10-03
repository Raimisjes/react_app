import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import useLoginStore from '../../store/useLoginStore';
import useUserStore from '../../store/useUserStore';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    submitForm
  } = useLoginStore();

  const {
    setUserEmail,
    setUserStatus,
  } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    if(useLoginStore.getState().isSubmitted) {
      setUserEmail(email);
      setUserStatus('logged');
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <h2>Login</h2>
          <div className="form-input">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'input-error' : ''}
              placeholder="Email"
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'input-error' : ''}
              placeholder="Password"
              required
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          <button className="btn-primary" type="submit">Log in</button>
          <div className="link">
            <Link to="/register" className="signup">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;