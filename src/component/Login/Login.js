import React , { useState} from "react";
// import './Login.css'
import axios from 'axios'
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://192.168.29.219:8080/ERP/signin', {
  //       userName,
  //       password,
  //     });
      
  //     console.log(response, "Response");

  //     if (response.data.statusCode === 200) {
  //       window.location.href = '/main';
  //     } else {
  //       setError('Invalid username or password');
  //     }
  //   } catch (error) {
  //     setError('Invalid username or password');
  //   }
  // };
   return (
    <body
      style={{
        backgroundImage: "url('/background-illustration.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // 192.168.29.219:8080/ERP/signin
    >
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src="/login.png" alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1 className="head-bg">
                    <center>Welcome to School</center>
                  </h1>
                  <br />
                  <h2>Sign in</h2>
                  {/* Form */}
                  <form action="index.html" style={{ paddingTop: "20px" }} 
                  // onSubmit={handleLogin}
                  >
                    <div className="form-group">
                      <label>
                        Username <span className="login-danger">*</span>
                      </label>
                      <input value={userName} onChange={(e) => setUsername(e.target.value)}
                        className="form-control login2-input"
                        type="text"
                      />
                      <span className="profile-views">
                        <i className="fas fa-user-circle"></i>
                      </span>
                    </div>
                    <div className="form-group" style={{ marginTop: "25px" }}>
                      <label>
                        Password <span className="login-danger">*</span>
                      </label>
                      <input
                      value={password} onChange={(e) => setPassword(e.target.value)}
                        className="form-control pass-input login2-input"
                        type="text"
                      />
                      {error && <p className="error">{error}</p>}
                      <span className="profile-views">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          {" "}
                          Remember me &nbsp;
                          <input type="checkbox" name="radio" />
                        </label>
                      </div>
                      <a href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                      <button 
                        className="btn btn-primary btn-block btn-lg p-2"
                        type="submit"
                      >
                        <span style={{
                              fontSize: "16px",
                              color: "#ffffff",
                              fontWeight: "bold",
                            }}>
                          <Link
                            
                            to="/main"
                          >
                            Login
                          </Link> 
                        </span>
                      </button>
                    </div>
                  </form>
                  {/* /Form */}

                  <div className="login-or" style={{ marginTop: "30px" }}>
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* Social Login */}
                  <div className="social-login" style={{ paddingTop: "10px" }}>
                    <p className="account-subtitle text-center">
                      Don't have an account?
                      <Link to="/register">
                      Sign Up
                      </Link>
                     
                    </p>
                  </div>
                  {/* /Social Login */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}

      {/* Feather Icon JS */}
      <script src="assets/js/feather.min.js"></script>
    </body>
  );
};

export default Login;
