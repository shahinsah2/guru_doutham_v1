import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Toolbar from "../components/Toolbar";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchRoles } from "../redux/slices/roleSlice";
import { deleteRole } from '../redux/slices/roleSlice'; 
import Spinner from "../assets/Spinner";




function Roles() {
  const dispatch = useDispatch();
  const { roles, loading, error } = useSelector((state) => state.roles);
  
  const handleDelete = (roleId) => {
    dispatch(deleteRole(roleId));
  };



  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  if (loading) return <Spinner/>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Toolbar />
      <div className="p-3">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
           
              <th className="py-2  px-5 border border-gray-300">Role</th>

              <th className="py-2  px-5 border border-gray-300 w-1/3">
                Description
              </th>
              <th className="py-2  px-5 border border-gray-300 w-40">Status</th>
              <th className="py-2  px-5 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role._id} className="border border-gray-200">
              
                <td className="py-2 px-4 border border-gray-300">
                  <input type="checkbox" className="toggle-checkbox" />{" "}
                  {role.name}
                </td>

                <td className="py-2 px-4 border border-gray-300">
                  {role.description}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {role.status === "active" ? (
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
                  <button className="px-2 py-1 bg-red-500 text-white rounded mr-2" onClick={()=>handleDelete(role._id)}>
                    <FaTrashAlt />
                  </button>
                  <Link to={`/roles/form/${role._id}`}>
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

export default Roles;
