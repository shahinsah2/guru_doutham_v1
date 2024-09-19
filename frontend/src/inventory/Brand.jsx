// import React from "react";
// import Toolbar from "../components/Toolbar";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";
// import { users } from "../assets/dummyMasterData";
// import { Link } from "react-router-dom";

// function Brand() {
//   return (
//     <>
//       <Toolbar />
//       <div className="p-3">
//         <table className="min-w-full bg-white border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               {/* <th className="py-2 border border-gray-300">Name</th> */}
//               <th className="py-2  px-5 border border-gray-300"> <input type="checkbox" className="toggle-checkbox" />{" "}Brand Code</th>

//               <th className="py-2  px-5 border border-gray-300 ">Brand Name</th>
//               <th className="py-2  px-5 border border-gray-300 w-1/3">
//                 Description
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
//                   {index + 1}
//                 </td>

//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} HP Laptops
//                 </td>
//                 <td className="py-2 px-4 border border-gray-300">
//                   {/* {user.password} */} Samsung Monitor and Laptops
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

// export default Brand;

// src/pages/Brands.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Toolbar from "../components/Toolbar";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchBrands, deleteBrand } from "../redux/slices/brandSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands, loading, error } = useSelector((state) => state.brands);
  console.log(brands);
  

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleDelete = (brandId) => {
    dispatch(deleteBrand(brandId));
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
            <th className="py-2  px-5 border border-gray-300"><input type="checkbox" className="toggle-checkbox" />Brand Code</th>
              <th className="py-2  px-5 border border-gray-300">Brand Name</th>

              <th className="py-2  px-5 border border-gray-300 w-1/3">
                Description
              </th>
              <th className="py-2  px-5 border border-gray-300 w-40">Status</th>
              <th className="py-2  px-5 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand._id} className="border border-gray-200">
                  <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{brand.brand_code}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {brand.brand_name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {brand.description}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {brand.status === "active" ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="py-2 px-5 border border-gray-300">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                    onClick={() => handleDelete(brand._id)}
                  >
                    <FaTrashAlt />
                  </button>
                  <Link to={`/brands/form/${brand._id}`}>
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

export default Brands;
