import React from "react";
import { Link } from "react-router-dom";

const FollowUpForm = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Container for both cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card - Follow up Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Follow up Details</h2>

          {/* Follow Up Type */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Follow up Type*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Type</option>
            </select>
          </div>

          {/* Created By */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Created By*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Type</option>
            </select>
          </div>

          {/* Select Lead */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Select Lead*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Lead</option>
            </select>
          </div>

          {/* Select Status */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Select Status*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Status</option>
            </select>
          </div>

          {/* Scheduled Followup */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Scheduled Followup*
            </label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Followup Summary */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Followup Summary*
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Second Card - Schedule New Follow up & Remainder Dates */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">
            Schedule New Follow up & Reminder Dates
          </h2>

          {/* Next Follow Up */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Next Follow up*
            </label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Reminder Date */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Reminder Date*
            </label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Reminder Message to Executive */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Reminder Message to Executive*
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
            ></textarea>
          </div>

          {/* Reminder Message to Customer Contact */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Reminder Message to Customer Contact*
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
            ></textarea>
          </div>

          {/* Customer Contacts */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Customer Contacts*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Customer</option>
            </select>
          </div>

          {/* Executives */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Executives*
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select Executives</option>
            </select>
          </div>

          {/* Email and SMS Checkbox */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email to Customer
              </label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email to Executive
              </label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                SMS to Customer
              </label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                SMS to Executive
              </label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-24 ps-96">
        <Link to="/crm/leads">
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FollowUpForm;
