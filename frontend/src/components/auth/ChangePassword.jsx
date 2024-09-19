import React, { useState } from "react";
import { IoEyeOffOutline, IoEye } from "react-icons/io5"; // Import eye icons
import loginImg from "../../assets/login_img.png"; // Ensure the image path is correct
import { Link } from "react-router-dom";

function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNewPasswordToggle = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col">
          <img src={loginImg} alt="SideImage" className="login-image" />
        </div>
        <div className="col middleAll">
          <form className="cardContainer">
            <h2
              className="formHeading mb-4"
              style={{ fontSize: "54px", fontWeight: "600" }}
            >
              Reset Your Password
            </h2>

            <div className="mb-3 position-relative">
              <label htmlFor="newPassword" className="form-label">
                New Password*
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                className="form-control"
                id="newPassword"
                placeholder="Enter New Password"
                required
              />
              <button
                type="button"
                className="btn-eye mt-3"
                onClick={handleNewPasswordToggle}
              >
                {showNewPassword ? <IoEye /> : <IoEyeOffOutline />}
              </button>
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password*
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                required
              />
              <button
                type="button"
                className="btn-eye mt-3"
                onClick={handleConfirmPasswordToggle}
              >
                {showConfirmPassword ? <IoEye /> : <IoEyeOffOutline />}
              </button>
            </div>

            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
            <div className="formFooter mt-4">
              <p>
                Back to Login?{" "}
                <span>
                  {" "}
                  <Link to="/login">Click Here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
