import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginUser } from "../../actions/authAction";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLoginUser = (e) => {
    e.preventDefault();
    dispatch(LoginUser(formValues));
  };

  return (
    <div className="login__background">
      <div className="login__form">
        <form onSubmit={handleLoginUser} className="login__form-main">
          <h1 className="login__title">Login</h1>
          <input
            type="text"
            placeholder="Email"
            className="mt-3 login__form-input"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-3 login__form-input"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
        <div className="login__link">
          <Link className="login__link-item" to="/auth/register">
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
