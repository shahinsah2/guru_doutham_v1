// import React from "react";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";
// import { users } from "../assets/dummyMasterData";
// import Toolbar from "../components/Toolbar";
// import { Link } from "react-router-dom";

// const Branches = () => {
//   return (
//     <>
//       <Toolbar />
//       <div className="p-3">
//         <table className="min-w-full bg-white border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="py-2 border border-gray-300">Branch Code</th>
//               <th className="py-2 border border-gray-300">Branch Name</th>
//               <th className="py-2 border border-gray-300">Address </th>
//               <th className="py-2 border border-gray-300">Country</th>
//               <th className="py-2 border border-gray-300">State</th>
//               <th className="py-2 border border-gray-300">City</th>
//               <th className="py-2 border border-gray-300">Pincode</th>
//               <th className="py-2 border border-gray-300">Active Status</th>
//               <th className="py-2 border border-gray-300">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index} className="border border-gray-200">
//                 <td className="py-2 px-4 border border-gray-300">
//                   <input type="checkbox" className="toggle-checkbox" />{" "}
//                   {/* {user.name} */} BLR
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.role} */} Bangalore
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.email} */}#16,7th Main Road,HSR Layout
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.phone} */} India
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.username} */} Karnataka
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} Bangalore
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */}560078
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {user.status ? (
//                     <span className="bg-green-500 text-white px-2 py-1 rounded">
//                       Active
//                     </span>
//                   ) : (
//                     <span className="bg-red-500 text-white px-2 py-1 rounded">
//                       Inactive
//                     </span>
//                   )}
//                 </td>
//                 <td className="py-2 border border-gray-300">
//                   <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
//                     <FaTrashAlt />
//                   </button>
//                   <Link to="/branch/form">
//                     {" "}
//                     <button className="px-2 py-1 bg-blue-500 text-white rounded">
//                       <FaEdit />
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* Pagination */}
//         <div className="flex justify-center mt-4">
//           <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
//             &lt;
//           </button>
//           <button className="px-3 py-1 bg-blue-500 text-white rounded mx-1">
//             1
//           </button>
//           <button className="px-3 py-1 bg-gray-200 rounded mx-1">2</button>
//           <button className="px-3 py-1 bg-gray-200 rounded mx-1">3</button>
//           <span className="px-3 py-1">...</span>
//           <button className="px-3 py-1 bg-gray-200 rounded mx-1">7</button>
//           <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
//             &gt;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Branches;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { fetchBranches, deleteBranch } from "../redux/slices/branchSlice";
import Toolbar from "../components/Toolbar";

function Branches() {
  const dispatch = useDispatch();
  const { branches, loading, error } = useSelector((state) => state.branches);
  console.log(branches);
  

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const handleDelete = (branchId) => {
    dispatch(deleteBranch(branchId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Toolbar />
      <div className="p-3">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-5 border border-gray-300">Branch Name</th>
              <th className="py-2 px-5 border border-gray-300 w-1/3">Location</th>
              <th className="py-2 px-5 border border-gray-300 w-40">Status</th>
              <th className="py-2 px-5 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch._id} className="border border-gray-200">
                <td className="py-2 px-4 border border-gray-300">{branch.branch_name}</td>
                <td className="py-2 px-4 border border-gray-300">{branch.address}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {branch.status === "active" ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded">Active</span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">Inactive</span>
                  )}
                </td>
                <td className="py-2 px-5 border border-gray-300">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                    onClick={() => handleDelete(branch._id)}
                  >
                    <FaTrashAlt />
                  </button>
                  <Link to={`/branches/form/${branch._id}`}>
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Branches;


