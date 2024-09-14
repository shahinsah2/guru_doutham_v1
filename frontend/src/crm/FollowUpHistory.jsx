import React from "react";
import { Link } from "react-router-dom";

const FollowUpHistory = () => {
  const followUpData = [
    {
      id: 5,
      followUpDate: "23-08-2024 12:05:00",
      createdBy: "Sreejith",
      status: "Not Interested",
      summary:
        "Due to Clients internal policies and long-term contracts with another provider, they are unable to proceed with the computer rental service at this time.",
      leadDate: "25-08-2024",
      nextFollowUpDate: "-",
    },
    {
      id: 4,
      followUpDate: "18-08-2024 12:05:00",
      createdBy: "Sreejith",
      status: "Warm",
      summary: "Interested",
      leadDate: "25-08-2024",
      nextFollowUpDate: "23-08-2024 12:05:00",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Follow Up History</h1>
        <Link to="/crm/leads/follow-up-form">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            + Add Followup
          </button>
        </Link>
      </div>

      {/* Table */}
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left text-gray-600">
            <th className="p-4">FollowUp Date</th>
            <th className="p-4">Created By</th>
            <th className="p-4">Status</th>
            <th className="p-4">Summary</th>
            <th className="p-4">Lead Date</th>
            <th className="p-4">Next Followup Date</th>
          </tr>
        </thead>
        <tbody>
          {followUpData.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-4">{item.followUpDate}</td>
              <td className="p-4">{item.createdBy}</td>
              <td className="p-4">{item.status}</td>
              <td className="p-4">{item.summary}</td>
              <td className="p-4">{item.leadDate}</td>
              <td className="p-4">{item.nextFollowUpDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default FollowUpHistory;
