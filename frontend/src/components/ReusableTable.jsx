import React from "react";
import { FaTrashAlt, FaEdit, FaCheckCircle } from "react-icons/fa";

const ReusableTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto p-3">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-5 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-5 py-2 text-sm">
                  {column.key === "action" ? (
                    <div className="flex space-x-3 justify-center">
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
                    </div>
                  ) : column.key === "isActive" ? (
                    <FaCheckCircle
                      className={`${
                        item.isActive ? "text-green-500" : "text-red-500"
                      } text-lg text-center`}
                    />
                  ) : column.key === "slNo" ? (
                    rowIndex + 1
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
