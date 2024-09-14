import React from "react";
import { FaTrashAlt, FaEdit, FaFileAlt } from "react-icons/fa";
import { users } from "../assets/dummyMasterData";
import Toolbar from "../components/Toolbar";
import { Link } from "react-router-dom";

const Quotations = () => {
  return (
    <>
      <Toolbar />
      <div className="p-3">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 border border-gray-300">Quotation No</th>
              <th className="py-2 border border-gray-300">Lead Number</th>
              <th className="py-2 border border-gray-300">Quote Date </th>
              <th className="py-2 border border-gray-300">Customer</th>
              <th className="py-2 border border-gray-300">Executive</th>
              {/* <th className="py-2 border border-gray-300">City</th>
              <th className="py-2 border border-gray-300">Pincode</th> */}
              <th className="py-2 border border-gray-300">Status</th>
              <th className="py-2 border border-gray-300">Move to Next</th>
              <th className="py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{" "}
                  {/* {user.name} */} 123
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.role} */}2839273
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.email} */} 27-08-2024
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.phone} */} ABCD Technologies
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */} Pavan Kumar
                </td>

                <td className="py-2 px-4 border border-gray-300">
                  {user.status ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      Executed
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">
                      Quoted
                    </span>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */}{" "}
                  <button className="btn bg-blue-300">Create Orders</button>
                </td>
                <td className="py-2 px-3 border border-gray-300">
                  <Link to="/rental">
                    {" "}
                    <button className="px-2 py-1 bg-yellow-500 text-white rounded mr-2">
                      <FaFileAlt />
                    </button>
                  </Link>
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                    <FaFileAlt />
                  </button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
                    <FaTrashAlt />
                  </button>
                  <Link to="/procurement/purchase-orders/form">
                    {" "}
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            &lt;
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded mx-1">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">3</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">7</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Quotations;
