import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-6">Profile / Edit Profile</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Personal Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Personal Details:</h2>
          <div className="text-center mb-4">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <span className="absolute right-40 bottom-0 bg-white border border-gray-300 rounded-full p-1">
                <i className="fas fa-pencil-alt"></i>
              </span>
            </div>
            <h3 className="text-lg mt-2">Profile Picture</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>First Name*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="Ajay"
              />
            </div>
            <div>
              <label>Last Name*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="Kumar"
              />
            </div>
            <div>
              <label>Login ID*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="AjayKumar1485"
              />
            </div>
            <div>
              <label>Password*</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="Ajay123456"
              />
            </div>
            <div>
              <label>Role Name*</label>
              <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                <option>Manager</option>
              </select>
            </div>
            <div>
              <label>Branch*</label>
              <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                <option>Bengaluru</option>
              </select>
            </div>
            <div>
              <label>Email ID*</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="Ajaykumar@gmail.com"
              />
            </div>
            <div>
              <label>Phone Number*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="9123456789"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Address:</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label>Address Line 1</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="#12, 9th main road, 4th Cross, JP Nagar"
              />
            </div>
            <div>
              <label>Street*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                placeholder="JP Nagar"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Country*</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                  <option>India</option>
                </select>
              </div>
              <div>
                <label>State*</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                  <option>Karnataka</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>City*</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                  <option>Bengaluru</option>
                </select>
              </div>
              <div>
                <label>Pincode*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="5600075"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Access */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Access:</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Add & Edit Users",
              "Delete User",
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
            ].map((access, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600"
                />
                <span>{access}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
      <Link to="/profile-access">
        <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
          Save
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
