import React, { useEffect } from "react";
import Toolbar from "../components/Toolbar";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { users } from "../assets/dummyMasterData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactTypes,
  deleteContactType,
} from "../redux/slices/contactTypeSlice";

function Contact() {
  const dispatch = useDispatch();
  const { contactTypes, loading, error } = useSelector(
    (state) => state.contactTypes
  );

  console.log(contactTypes,"contact");

  useEffect(() => {
    dispatch(fetchContactTypes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContactType(id));
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
              {/* <th className="py-2 border border-gray-300">Name</th> */}
              <th className="py-2  px-5 border border-gray-300">
                Contacts Type Code
              </th>

              <th className="py-2  px-5 border border-gray-300 w-1/3">
                Contacts Type
              </th>
              <th className="py-2  px-5 border border-gray-300 w-1/3">
                Description
              </th>

              <th className="py-2  px-5 border border-gray-300 w-40">Status</th>
              <th className="py-2  px-5 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {contactTypes.map((type) => (
              <tr key={type._id} className="border border-gray-200">
                {/* <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{" "} <td>{type.type_name}</td>
//               <td>{type.description}</td>
//               <td>{type.status}</td>
                  {user.name}
                </td> */}
                <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{" "}
                  {type.contact_type_code}
                </td>

                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.password} */} {type.contact_type}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.password} */}{type.description}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {type.status ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="py-2 px-2 border border-gray-300">
                  <button className="px-2 py-1 bg-red-500 text-white rounded mr-2" onClick={()=>handleDelete(type._id)}>
                    <FaTrashAlt />
                  </button>
                  <Link to={`/contact/edit/${type._id}`}>
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
}

export default Contact;

// src/components/ContactTypeList.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContactTypes, deleteContactType } from '../redux/slices/contactTypeSlice';
// import { Link } from 'react-router-dom';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// const Contact = () => {
//   const dispatch = useDispatch();
//   const { contactTypes, loading, error } = useSelector((state) => state.contactTypes);

//   console.log(contactTypes);

//   useEffect(() => {
//     dispatch(fetchContactTypes());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteContactType(id));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <Link to="/contact-types/add" className="btn btn-primary">Add Contact Type</Link>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contactTypes.map((type) => (
//             <tr key={type._id}>
//               <td>{type.type_name}</td>
//               <td>{type.description}</td>
//               <td>{type.status}</td>
//               <td>
//                 <Link to={`/contact-types/edit/${type._id}`}>
//                   <FaEdit />
//                 </Link>
//                 <button onClick={() => handleDelete(type._id)}>
//                   <FaTrashAlt />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Contact;
