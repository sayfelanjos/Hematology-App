import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="form-login">
      <div className="container">
        <label htmlFor="uname" className="label">Username</label>
        <input className="input-form" type="text" placeholder="Enter Username" name="uname" required></input>

        <label htmlFor="psw" className="label">Password</label>
          <input className="input-form" type="password" placeholder="Enter Password" name="psw" required></input>

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"></input>
        </label>
      </div>
      <div className="container">
        <button type="button" className="cancelbtn">Cancel</button>
        {/*<span className="psw"><a href="http://google.com">Forgot password?</a></span>*/}
      </div>
    </form>
  );
};

export default LoginForm;