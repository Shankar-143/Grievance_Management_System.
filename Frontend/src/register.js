import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "./image/cutmlogo.jpg";
export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            <center>
              <img
                src={logo}
                style={{ height: "70px", width: "70px" }}
                alt="Image Preview"
              />
            </center>{" "}
            Sign Up{" "}
          </h3>
          <div className="form-group mt-3">
            <label> Full Name </label>
            <input
              type="FullName"
              className="form-control mt-1"
              placeholder="Enter your FullName"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label> Email address </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label> Mobile Number </label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter MobileNumber"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label> Password </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label> Confirm Password </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="text-center">
            Already have an account ?
            <span className="link-primary">
              <Link to="/auth"> Login </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
