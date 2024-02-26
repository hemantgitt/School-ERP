import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    const apiUrl = "http://192.168.29.219:8080/ERP/register";

    const userData = {
      userName: userName,
      password: password,
      mobile: mobile,
      name: name,
      email: email,
    };

    axios
      .post(apiUrl, userData)
      .then((response) => {
        console.log("User registered successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error registering user:", error.response.data);
        setErrorMessage(error.response.data.message); // Display error message to user
      });
  };
  return (
    <>
      <body
        style={{
          backgroundImage: "url('/background-illustration.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <!-- Main Wrapper --> */}
        <div class="main-wrapper login-body">
          <div class="login-wrapper">
            <div class="container">
              <div class="loginbox">
                <div class="login-left">
                  <img class="img-fluid" src="/login.png" alt="Logo" />
                </div>
                <div class="login-right">
                  <div class="login-right-wrap">
                    <h2 class="head-bg text-center text-white fw-50">
                      Sign Up
                    </h2>
                    {/* <!-- <p class="account-subtitle">Enter details to create your account</p> --> */}

                    {/* <!-- Form --> */}
                    <form onSubmit={handleRegister}>
                      <div class="form-group">
                        <label>
                          Name <span class="login-danger">*</span>
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          class="form-control login2-input my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-user-circle"></i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label>
                          Mobile <span class="login-danger">*</span>
                        </label>
                        <input
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          class="form-control login2-input my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-user-circle"></i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label>
                          Username <span class="login-danger">*</span>
                        </label>
                        <input
                          value={userName}
                          onChange={(e) => setUsername(e.target.value)}
                          class="form-control login2-input my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-user-circle"></i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label>
                          Email <span class="login-danger">*</span>
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          class="form-control login2-input my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label>
                          Password <span class="login-danger">*</span>
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          class="form-control login2-input pass-input my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-lock"></i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label>
                          Confirm password <span class="login-danger">*</span>
                        </label>
                        <input
                          class="form-control login2-input pass-confirm my-4"
                          type="text"
                        />
                        <span class="profile-views">
                          <i class="fas fa-lock"></i>
                        </span>
                      </div>

                      <div class="form-group mb-0">
                        <button
                          class="btn btn-primary btn-block btn-lg p-2"
                          type="submit"
                        >
                          <span
                            style={{
                              fontSize: "16px",
                              color: "#ffffff",
                              fontWeight: "bold",
                            }}
                          >
                            Register
                          </span>
                        </button>
                        {errorMessage && (
                          <p style={{ color: "red" }}>{errorMessage}</p>
                        )}
                      </div>
                    </form>
                    {/* <!-- /Form --> */}

                    <div class="login-or">
                      <span class="or-line"></span>
                      <span class="span-or">or</span>
                    </div>

                    {/* <!-- Social Login --> */}
                    <div class="social-login" style={{ paddingTop: "10px" }}>
                      <p class="account-subtitle text-center mb-0">
                        Already Registered?
                        <Link to="/">Login</Link>
                      </p>
                    </div>
                    {/* <!-- /Social Login --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
