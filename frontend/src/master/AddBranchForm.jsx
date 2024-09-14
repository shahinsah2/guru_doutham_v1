import React from "react";
import { Link } from "react-router-dom";

const AddBranchForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-8 mb-32">
        {/* Branch Details Section */}
        <div className="border rounded p-4 bg-white shadow-md">
          <h3 className="font-semibold mb-4">Branch Details:</h3>
          <div className="mb-4">
            <label className="block mb-2">Branch Code*</label>
            <input
              type="text"
              placeholder="BLR"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Branch Name*</label>
            <input
              type="text"
              placeholder="Bengaluru"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="border rounded p-4 bg-white shadow-md">
          <h3 className="font-semibold mb-4">Address:</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Pincode*</label>
              <input
                type="text"
                placeholder="560085"
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Country*</label>
              <select className="border p-2 rounded w-full">
                <option>India</option>
                {/* Populate dynamically */}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">State*</label>
              <select className="border p-2 rounded w-full">
                <option>Karnataka</option>
                {/* Populate dynamically */}
              </select>
            </div>
            <div>
              <label className="block mb-2">City*</label>
              <select className="border p-2 rounded w-full">
                <option>Bangalore</option>
                {/* Populate dynamically */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Landmark</label>
            <input
              type="text"
              placeholder="Enter Landmark"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Street*</label>
            <input
              type="text"
              placeholder="#16, 7th Main Road, HSR Layout"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Control Section */}
        <div className="border rounded p-4 bg-white shadow-md">
          <h3 className="font-semibold mb-4">Control:</h3>
          <div className="flex items-center gap-2">
            <label className="block mb-2">Active Status*</label>
            <input type="checkbox" className="w-6 h-6" />
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex items-center gap-4">
        <Link to="/inventory/stock-locations">
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddBranchForm;
