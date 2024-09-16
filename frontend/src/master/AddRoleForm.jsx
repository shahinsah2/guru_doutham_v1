import React from 'react';
import { useDispatch } from 'react-redux';
import { createRole } from '../redux/slices/roleSlice';
import { useNavigate } from 'react-router-dom';
import RoleForm from './RoleForm'; // Import the reusable form

const AddRoleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newRole) => {
    dispatch(createRole(newRole)); // Dispatch the createRole action
    navigate('/roles'); // Redirect to roles list
  };

  return <RoleForm onSubmit={handleSubmit} />;
};

export default AddRoleForm;
