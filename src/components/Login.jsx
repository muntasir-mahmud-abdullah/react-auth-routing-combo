import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {handleLogin,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
      googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error=>console.log('ERROR',error))
      }
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        handleLogin(email,password)
        .then((result) => {
          console.log(result.user);
          e.target.reset();
          navigate('/');
        })
        .catch(error=>console.log('error:',error))
    }
    return (
<div className="hero bg-base-200">
  <div className="hero-content flex-col">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>
        New to the website? please <Link to='/register'>Register</Link>.
      </p>
      <p>
        <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
      </p>
    </div>
  </div>
</div>
    );
};

export default Login;