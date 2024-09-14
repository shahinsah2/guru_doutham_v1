import React from "react";
import { Link } from "react-router-dom";
import MasterAccessCard from "./MasterAccessCard";

const AddUserForm = () => {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:underline">
            Masters
          </Link>
          <span>/</span>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
              Save
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            {/* Personal Details Card */}
            <div className="bg-white p-6 rounded ">
              <h2 className="font-semibold mb-4">Personal Details:</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">First Name*</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Last Name*</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Login ID*</label>
                  <input
                    type="text"
                    placeholder="Enter Login ID"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Password*</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Role Name*</label>
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Select User Role</option>
                    {/* Options go here */}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Branch*</label>
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Select Branch</option>
                    {/* Options go here */}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Email ID*</label>
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded ">
              <h2 className="font-semibold mb-4">Address:</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Pincode*</label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Country*</label>
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Select Country</option>
                    {/* Options go here */}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">State*</label>
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Select State</option>
                    {/* Options go here */}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">City*</label>
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Select City</option>
                    {/* Options go here */}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Landmark</label>
                  <input
                    type="text"
                    placeholder="Enter Landmark"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Street</label>
                  <input
                    type="text"
                    placeholder="Enter Street"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block font-medium mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              </div>
            </div>

            {/* Control Card */}
            <div className="flex justify-start items-start gap-2 rounded ">
              <h2 className="font-semibold ms-5">Control:</h2>
              <div className="flex items-center">
                <label className="mr-2">Status</label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </div>

          {/* User Access Section */}
          <div className="bg-white p-4 rounded shadow flex justify-between">
            <h2 className="font-semibold mb-2">User Access:</h2>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          {/* <MasterAccessCard/> */}
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
