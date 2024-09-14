import React from "react";
import { Link } from "react-router-dom";

const AddRoleForm = () => {
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
          <Link to="/roles">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
              Save
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            {/* Create Role Card */}
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="font-semibold mb-4">Create Role:</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-medium mb-1">Role Name*</label>
                  <input
                    type="text"
                    placeholder="Enter Role Name"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description*</label>
                  <textarea
                    placeholder="Enter Description"
                    className="border border-gray-300 p-2 rounded w-full"
                    rows="4"
                  />
                </div>
              </div>
            </div>

            {/* Control Card */}
            <div className="bg-white p-6 rounded w-1/2 flex-grow flex-shrink max-w-xs h-full">
              <h2 className="font-semibold mb-4">Control:</h2>
              <div className="flex items-center">
                <label className="mr-2">Active Status*</label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </div>

          {/* User Default Access Section */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">User Default Access:</h2>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="toggle-checkbox" />
              <label>Toggle Access</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRoleForm;
