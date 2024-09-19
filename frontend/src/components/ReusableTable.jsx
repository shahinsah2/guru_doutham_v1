import React from "react";
import { FaTrashAlt, FaEdit, FaCheckCircle } from "react-icons/fa";

const ReusableTable = ({ data }) => {
  return (
    <div className="overflow-x-auto p-3">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
              Sl.no
            </th>
            <th className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
              Description
            </th>
            <th className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
              Active Status
            </th>
            <th className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-5 py-2 text-sm">{index + 1}</td>
              <td className="px-5 py-2 text-sm">{item.status}</td>
              <td className="px-5 py-2 text-sm">{item.description}</td>
              <td className="px-5 py-2 text-sm text-center">
                <FaCheckCircle
                  className={`${
                    item.isActive ? "text-green-500" : "text-red-500"
                  } text-lg`}
                />
              </td>
              <td className="px-5 py-2 text-sm flex space-x-3 justify-center">
                <button
                  onClick={() => item.onDelete(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => item.onEdit(item.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
