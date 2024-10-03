import { Link } from "react-router-dom";
import Header from '../../components/header/Header'
import useRegistrationStore from '../../store/useRegistrationStore';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    name,
    email,
    password,
    nameError,
    emailError,
    passwordError,
    setName,
    setEmail,
    setPassword,
    submitForm
  } = useRegistrationStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    if(useRegistrationStore.getState().isSubmitted) {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit} noValidate >
          <h2>Register</h2>
          <div className="form-input">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={nameError ? 'input-error' : ''}
              placeholder="Name"
              required
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
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