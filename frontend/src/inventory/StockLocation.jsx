// import React from "react";
// import Toolbar from "../components/Toolbar";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";
// import { users } from "../assets/dummyMasterData";
// import { Link } from "react-router-dom";

// function StockLocation() {
//   return (
//     <>
//       <Toolbar />
//       <div className="p-3">
//         <table className="min-w-full bg-white border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               {/* <th className="py-2 border border-gray-300">Name</th> */}
//               <th className="py-2  px-5 border border-gray-300"> <input type="checkbox" className="toggle-checkbox" />{" "}Stock Name</th>

//               <th className="py-2  px-5 border border-gray-300 ">Phone Number</th>
//               <th className="py-2  px-5 border border-gray-300 w-1/3">
//               Stock Location
//               </th>
//               {/* <th className="py-2  px-5 border border-gray-300 ">
//                 Product Quantity
//               </th> */}
//               <th className="py-2  px-5 border border-gray-300 w-40">
//                 Active Status
//               </th>
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
//                   Anand Pvt
//                 </td>

//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} 9546247622
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} #12,6th Main Road,Bannerghatta Road,Bangalore
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
//                 <td className="py-2 px-5 border border-gray-300">
//                   <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
//                     <FaTrashAlt />
//                   </button>
//                   <Link to="/roles/form">
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

// export default StockLocation;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStockLocations,
  deleteStockLocation,
} from "../redux/slices/stockLocationSlice";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Toolbar from "../components/Toolbar";

const StockLocations = () => {
  const dispatch = useDispatch();
  const { locations, loading, error } = useSelector(
    (state) => state.stockLocations
  );
  console.log(locations);

  useEffect(() => {
    dispatch(fetchStockLocations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStockLocation(id));
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
              <th className="py-2 px-5 border border-gray-300">
                Location Code
              </th>
              <th className="py-2 px-5 border border-gray-300">
                Location Name
              </th>
              <th className="py-2 px-5 border border-gray-300">
                Stock Location
              </th>
              <th className="py-2 px-5 border border-gray-300 w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location._id} className="border border-gray-200">
                <td className="py-2 px-4 border border-gray-300">
                  {location.location_code}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {location.location_name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {location.address}
                </td>
                <td className="py-2 px-5 border border-gray-300">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                    onClick={() => handleDelete(location._id)}
                  >
                    <FaTrashAlt />
                  </button>
                  <Link to={`/inventory/stock-locations/${location._id}`}>
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
};

export default StockLocations;
