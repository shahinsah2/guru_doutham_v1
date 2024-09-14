// src/ProfileAccessCard.js

import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileAccessCard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg" // Placeholder image
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 className="font-semibold text-xl">Ajay Kumar</h2>
              <p className="text-gray-500">Manager (Admin)</p>
            </div>
          </div>
          <div className="text-gray-700">
            <p className="mb-2">
              4/1, Bannerghatta Rd, Bhavani Nagar, S.G. Palya, Bengaluru,
              Karnataka 560029
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              +91 9856558555
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              ajaykumar@gmail.com
            </p>
            <p className="flex items-center mb-2">
              <FaLock className="mr-2" />
              Password12
            </p>
          </div>
          <div className="flex justify-start mt-4">
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded flex items-center mr-2">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
            <Link to="/profile-access/edit">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center">
                <FaEdit className="mr-2" />
                Edit
              </button>
            </Link>
          </div>
        </div>

        {/* Access Rights Card */}
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
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
              "Add & Edit Users",
            ].map((access, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="form-checkbox text-blue-600 w-4 h-4"
                />
                <span className="ml-2 text-gray-700">{access}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccessCard;
