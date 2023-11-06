import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"> Forgot Password </h3>{" "}
          <div className="text-center"> </div>{" "}
          <div className="form-group mt-3">
            <label> Email address </label>{" "}
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>{" "}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Reset Password{" "}
            </button>{" "}
          </div>{" "}
          <p className="text-center mt-2">
            <Link to="/auth">Back To LoginPage</Link>
          </p>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
