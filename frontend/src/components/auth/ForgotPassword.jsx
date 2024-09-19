import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5"; // Import the eye icon
import loginImg from "../../assets/login_img.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [showEmail, setShowEmail] = useState(false); // Manage email visibility (if needed)

  const handleEmailToggle = () => {
    setShowEmail(!showEmail); // Toggle email visibility if needed
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col">
          <img src={loginImg} alt="SideImage" />
        </div>
        <div className="col middleAll">
          <form className="cardContainer pt-40">
            <p className="formHeading mb-4">Forgot Password</p>
            <div className="mb-3 position-relative">
            <div id="emailHelp" className="form-text m-3">
              Enter Your Email And We'll Send You Instructions To Reset Your Password
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label" style={{text:"bold", fontWeight:"400"}}>
              Email*
              </label>
              <input
                // type={showEmail ? "text" : "email"} 
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                required
              />
              {/* <button
                type="button"
                className="btn-eye mt-1"
                onClick={handleEmailToggle}
              >
                {showEmail ? <IoEyeOffOutline /> : <IoEyeOffOutline />} 
              </button> */}
           
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
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

export default ForgotPassword;
