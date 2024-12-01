import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch((error) => console.log("error:", error.message));
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <p>
            Already have an account? please <Link to="/login">Log in</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
