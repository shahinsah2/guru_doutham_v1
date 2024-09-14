// src/components/CustomFieldCard.js
import React, { useState } from "react";
import { FaToggleOn, FaToggleOff, FaPlus } from "react-icons/fa";

const CustomFieldCard = () => {
  const [isRequired, setIsRequired] = useState(false);
  const [listOut, setListOut] = useState(false);
  const [fieldType, setFieldType] = useState("text"); // 'text' or 'switch'

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow-md p-6 m-5">
      <h2 className="text-lg font-semibold mb-4">Custom field</h2>

      <div className="flex justify-between mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="fieldType"
            value="text"
            checked={fieldType === "text"}
            onChange={() => setFieldType("text")}
            className="mr-2"
          />
          Text Field
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="fieldType"
            value="switch"
            checked={fieldType === "switch"}
            onChange={() => setFieldType("switch")}
            className="mr-2"
          />
          Switch Field
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="heading">
            Heading*
          </label>
          <input
            type="text"
            id="heading"
            placeholder="Enter Heading"
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="purchase-price"
          >
            Purchase Price
          </label>
          <input
            type="text"
            id="purchase-price"
            placeholder="Enter Purchase Price"
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <span className="mr-2">Required(*)</span>
          <div onClick={() => setIsRequired(!isRequired)}>
            {isRequired ? (
              <FaToggleOn className="text-blue-500 text-2xl cursor-pointer" />
            ) : (
              <FaToggleOff className="text-gray-500 text-2xl cursor-pointer" />
            )}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">List out something</span>
          <div onClick={() => setListOut(!listOut)}>
            {listOut ? (
              <FaToggleOn className="text-blue-500 text-2xl cursor-pointer" />
            ) : (
              <FaToggleOff className="text-gray-500 text-2xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="list-1">
            List 1
          </label>
          <input
            type="text"
            id="list-1"
            placeholder="Enter List"
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex items-center">
          <button className="bg-gray-200 p-2 rounded-full">
            <FaPlus className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="save-checkbox" className="mr-2" />
        <label htmlFor="save-checkbox" className="text-sm">
          Save this field for every time I added laptop
        </label>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomFieldCard;
