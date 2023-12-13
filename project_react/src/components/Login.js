import React from 'react';
import './Login.css'; 
import {Link} from 'react-router-dom';
class Login extends React.Component {
  render() {
    return (
  
      <div class="container">
         <form action="login.html" className="login-form">
          <h1>Login</h1>
          <div className="txtb">
            <input type="text" placeholder="Username" />
          </div>
          <div className="txtb">
          <input type="password" id="pass" name="password" minlength="8" required placeholder="Password"/>
           
          </div>
          <input type="submit" value="Login" className="logbtn" />
          <div className="bottom-text">
            Don't have an account? <Link to="./register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}


export default Login;