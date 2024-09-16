import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRole } from '../redux/slices/roleSlice';
import { useParams, useNavigate } from 'react-router-dom';
import RoleForm from './RoleForm'; // Import the reusable form

const EditRoleForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roles } = useSelector((state) => state.roles);

  const roleToEdit = roles.find((role) => role._id === id);

  const handleSubmit = (updatedRoleData) => {
    dispatch(updateRole({ roleId: id, updatedData: updatedRoleData }));
    navigate('/roles'); // Redirect after updating
  };

  if (!roleToEdit) {
    return <p>Role not found!</p>;
  }

  return <RoleForm initialData={roleToEdit} onSubmit={handleSubmit} isEdit={true} />;
};

export default EditRoleForm;
