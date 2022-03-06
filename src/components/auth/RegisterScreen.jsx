import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../actions/authAction";
import useForm from "../../hooks/useForm";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPas: "",
  });

  const { name, email, password, confirmPas } = formValues;

  const handleNewUser = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(formValues));
  };

  return (
    <div className="login__background">
      <div className="login__form">
        <form onSubmit={handleNewUser} className="login__form-main">
          <h1 className="login__title">Register</h1>
          <input
            type="text"
            placeholder="Name"
            className="mt-3 login__form-input"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
          <input
            type="email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-3 login__form-input"
            name="confirmPas"
            onChange={handleInputChange}
            value={confirmPas}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </form>
        <div className="login__link">
          <Link className="login__link-item" to="/auth/login">
            Have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
