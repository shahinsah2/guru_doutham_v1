import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import {users} from '../assets/dummyMasterData'
import Toolbar from './Toolbar';
import { Link } from 'react-router-dom';

const UserTable = () => {
 

  return (
  <>
  <Toolbar/>
    <div className="p-3">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border border-gray-300">Name</th>
            <th className="py-2 border border-gray-300">Role</th>
            <th className="py-2 border border-gray-300">Email Id</th>
            <th className="py-2 border border-gray-300">Phone Number</th>
            <th className="py-2 border border-gray-300">Username</th>
            <th className="py-2 border border-gray-300">Password</th>
            <th className="py-2 border border-gray-300">Active Status</th>
            <th className="py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border border-gray-200">
              
              <td className="py-2 px-4 border border-gray-300"><input type="checkbox" className="toggle-checkbox" /> {user.name}</td>
              <td className="py-2 px-4 border border-gray-300">{user.role}</td>
              <td className="py-2 px-4 border border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border border-gray-300">{user.phone}</td>
              <td className="py-2 px-4 border border-gray-300">{user.username}</td>
              <td className="py-2 px-4 border border-gray-300">{user.password}</td>
              <td className="py-2 px-4 border border-gray-300">
                {user.status ? (
                  <span className="bg-green-500 text-white px-2 py-1 rounded">Active</span>
                ) : (
                  <span className="bg-red-500 text-white px-2 py-1 rounded">Inactive</span>
                )}
              </td>
              <td className="py-2 border border-gray-300">
                <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
                  <FaTrashAlt />
                </button>
              <Link to='/addmaster'>  <button className="px-2 py-1 bg-blue-500 text-white rounded">
                  <FaEdit />
                </button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">&lt;</button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded mx-1">1</button>
        <button className="px-3 py-1 bg-gray-200 rounded mx-1">2</button>
        <button className="px-3 py-1 bg-gray-200 rounded mx-1">3</button>
        <span className="px-3 py-1">...</span>
        <button className="px-3 py-1 bg-gray-200 rounded mx-1">7</button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">&gt;</button>
      </div>
    </div>
  </>
  );
};

export default UserTable;
