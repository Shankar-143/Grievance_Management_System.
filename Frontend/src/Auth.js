import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Register from "./register";

import logo from "./image/logo.jpg";
export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">
              {" "}
              <center>
                <img
                  src={logo}
                  style={{ height: "170px", width: "370px" }}
                  alt="Image Preview"
                />
              </center>
              Login{" "}
            </h3>
            <div className="text-center">
              Not registered yet ?
              <span className="link-primary">
                <Link to="/register"> Sign Up</Link>
              </span>
            </div>
            <div className="form-group mt-3">
              <label> Email address </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label> Password </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              <Link to="/forgetpassword">Forgot password ? </Link>
            </p>
          </div>
        </form>
      </div>
    );
  } else {
    <Register />;
  }
}
