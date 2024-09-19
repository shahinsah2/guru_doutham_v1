// import React from "react";
// import Toolbar from "../components/Toolbar";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";
// import { users } from "../assets/dummyMasterData";
// import { Link } from "react-router-dom";

// function TaxList() {
//   return (
//     <>
//       <Toolbar />
//       <div className="p-3">
//         <table className="min-w-full bg-white border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               {/* <th className="py-2 border border-gray-300">Name</th> */}
//               <th className="py-2  px-5 border border-gray-300">
//                 Contacts Type Code
//               </th>

//               <th className="py-2  px-5 border border-gray-300 w-1/3">
//               Tax Name
//               </th>
//               <th className="py-2  px-5 border border-gray-300 w-1/3">
//               Percentage
//               </th>

//               <th className="py-2  px-5 border border-gray-300 w-40">Status</th>
//               <th className="py-2  px-5 border border-gray-300">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index} className="border border-gray-200">
//                 {/* <td className="py-2 px-4 border border-gray-300">
//                   <input type="checkbox" className="toggle-checkbox" />{" "}
//                   {user.name}
//                 </td> */}
//                 <td className="py-2 px-4 border border-gray-300">
//                   <input type="checkbox" className="toggle-checkbox" />{" "}
//                   {index + 1}
//                 </td>

//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} CGST
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */}10%
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
//                 <td className="py-2 px-2 border border-gray-300">
//                   <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
//                     <FaTrashAlt />
//                   </button>
//                   <Link to="/contacts/form">
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
// }

// export default TaxList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaxes, deleteTax } from '../redux/slices/taxSlice';
import { Link } from 'react-router-dom';

const TaxList = () => {
  const dispatch = useDispatch();
  const taxes = useSelector((state) => state.taxes);
  console.log(taxes.taxes);
  

  useEffect(() => {
    dispatch(fetchTaxes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTax(id));
  };

  return (
    <div className="p-6">
      <h2 className="font-semibold text-xl mb-4">Taxes</h2>
      <Link to="/add-tax" className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block">
        Add New Tax
      </Link>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th>Tax Code</th>
            <th>Tax Name</th>
            <th>Percentage</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taxes?.taxes.map((tax) => (
            <tr key={tax._id}>
              <td>{tax.tax_code}</td>
              <td>{tax.tax_name}</td>
              <td>{tax.percentage}%</td>
              <td>{tax.status}</td>
              <td>
                <Link to={`/edit-tax/${tax._id}`} className="bg-yellow-500 text-white py-1 px-3 rounded mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(tax._id)} className="bg-red-500 text-white py-1 px-3 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxList;

