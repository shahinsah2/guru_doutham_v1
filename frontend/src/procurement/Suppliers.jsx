import React from "react";
import { FaTrashAlt, FaEdit, FaFileAlt } from "react-icons/fa";
import { users } from "../assets/dummyMasterData";
import Toolbar from "../components/Toolbar";
import { Link } from "react-router-dom";

const Suppliers = () => {
  return (
    <>
      <Toolbar />
      <div className="p-3">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 border border-gray-300"> <input type="checkbox" className="toggle-checkbox" />{" "}Supplier</th>
              <th className="py-2 border border-gray-300">Website</th>
              <th className="py-2 border border-gray-300">Emp Name </th>
              <th className="py-2 border border-gray-300">Emp Email</th>
              <th className="py-2 border border-gray-300">Emp mobile</th>
              <th className="py-2 border border-gray-300">Off Phone</th>
              <th className="py-2 border border-gray-300">Executive</th>
             
              <th className="py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{" "}
                  {/* {user.name} */} ABCD Technologies
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.role} */} abcd@gmail.com
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.email} */}Ashok
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.phone} */} Ashok@gmail.com
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */} 8956895689
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */} 8956895689
                </td>
          
                <td className="py-2 px-4 border border-gray-300">
                  
                    <span className="bg-gray-500 text-white px-2 py-1 rounded">
                      admin
                    </span>
                   
                </td>
                <td className="py-2 px-3 border border-gray-300">
                
                  {/* <button className="px-2 py-1 bg-yellow-500 text-white rounded mr-2">
                  <FaFileAlt />
                  </button> */}
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

export default Suppliers;


 