import React, { useState } from "react";

const CreateTermsAndCondition = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="container mx-auto p-6">
      <form className="grid grid-cols-3 gap-6">
        {/* Left Section - Form Inputs */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Create Terms and Condition:
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Terms & Condition Sl.no*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              defaultValue="02"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type*
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Select Type</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Transaction Type*
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Select Transaction Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
              </select>
            </div>
          </div>

          {/* Points */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Points*
            </label>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="1. Enter Point"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="2. Enter Description"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center border-2 border-gray-300 border-dashed rounded-md py-2"
          >
            <span className="text-gray-600">+</span>
          </button>
        </div>

        {/* Right Section - Status Control */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Control:</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Active Status*
            </label>
            <div className="mt-2">
              <label
                htmlFor="toggleActive"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="toggleActive"
                  className="sr-only peer"
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {isActive ? "Active" : "Inactive"}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="col-span-3 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTermsAndCondition;
