import React from "react";
import { Link } from "react-router-dom";

const AddForm = ({
  title,
  tx1,
  tx2,
  lnk
  
}) => {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:underline">
            Masters
          </Link>
          <span>/</span>
          <Link to="/" className="hover:underline">
            Users
          </Link>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            {/* Create Role Card */}
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="font-semibold mb-4">{title}</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-5">
                    <div>
                      <label className="block font-small mb-1">
                        {tx1}
                      </label>
                      <input
                        type="text"
                        // placeholder="05"
                        className="border border-gray-300 p-2 rounded w-full"
                      />
                    </div>
                    <div>
                      <label className="block font-small mb-1">{tx2}</label>
                      <input
                        type="text"
                        // placeholder="Enter Type"
                        className="border border-gray-300 p-2 rounded w-full"
                      />
                    </div>
                  </div>
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
          <div className="flex items-center justify-center gap-4">
            <Link to={lnk}>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddForm;
