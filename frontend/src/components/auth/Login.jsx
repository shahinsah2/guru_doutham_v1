import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { IoEyeOffOutline } from "react-icons/io5";
import loginImg from "../../assets/login_img.png";
import { Link } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col">
          <img src={loginImg} alt="SideImage" />
        </div>
        <div className="col middleAll">
          <form className="cardContainer">
            <p className="formHeading mb-4">Login</p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                id="username"
                aria-describedby="usernameHelp"
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter Password"
                id="password"
                required
              />
              <button
                type="button"
                className="btn-eye mt-3"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <IoEyeOffOutline /> : <FaEye />}
              </button>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="formFooter mt-4">
              <p>Forgot Your Password?  <span>
                  {" "}
                  <Link to="/forgot-password">Click Here</Link>
                </span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
