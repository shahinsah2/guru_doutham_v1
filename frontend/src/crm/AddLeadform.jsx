// src/AddLeadForm.js

import React from 'react';
import { Link } from 'react-router-dom';

const AddLeadForm = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Customer Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leadCode">
                Lead Code
              </label>
              <input
                id="leadCode"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Lead Code"
                value="9658"
                readOnly
              />
            </div>
            <div className=" ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerCode">
                Customer Code
              </label>
              <input
                id="customerCode"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Customer Code"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerCompany">
                Customer/Company*
              </label>
              <select
                id="customerCompany"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select Customer/Company</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactPerson">
                Contact Person*
              </label>
              <select
                id="contactPerson"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select Contact Person</option>
              </select>
            </div>
            {/* Address Section */}
            <h3 className="font-semibold text-lg mt-6 mb-2">Address:</h3>
            {['Pincode', 'Country', 'State', 'City', 'Landmark', 'Street'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.toLowerCase()}>
                  {field}*
                </label>
                <input
                  id={field.toLowerCase()}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </form>
        </div>

        {/* Lead Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Lead Details</h2>
          <form>
            {[
              { label: 'Lead generated by*', id: 'leadGeneratedBy' },
              { label: 'Lead Mode*', id: 'leadMode' },
              { label: 'Lead Status*', id: 'leadStatus' },
              { label: 'Lead Date*', id: 'leadDate', type: 'date' },
              { label: 'Lead Type*', id: 'leadType' },
              { label: 'Lead Title*', id: 'leadTitle', type: 'text' },
            ].map(({ label, id, type = 'text' }) => (
              <div key={id} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                  {label}
                </label>
                {type === 'select' ? (
                  <select
                    id={id}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select {label.split(' ')[0]}</option>
                  </select>
                ) : (
                  <input
                    id={id}
                    type={type}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={`Enter ${label.split(' ')[0]}`}
                  />
                )}
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leadDetails">
                Lead Details*
              </label>
              <textarea
                id="leadDetails"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Details"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Control */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-4">Control:</h2>
          <div className="flex items-center mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activeStatus">
              Active Status*
            </label>
            <input
              id="activeStatus"
              type="checkbox"
              className="ml-2 transform scale-125"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
          <Link
           to="/crm/leads">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
              Save
            </button>
          </Link>
        </div>
    </div>
  );
};

export default AddLeadForm;

