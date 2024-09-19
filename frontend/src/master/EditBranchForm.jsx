// EditBranchForm.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateBranch, fetchBranches } from "../redux/slices/branchSlice";
import BranchForm from "./BranchForm";

const EditBranchForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { branches } = useSelector((state) => state.branches);
  const branch = branches.find((b) => b._id === id);

  useEffect(() => {
    if (!branches.length) {
      dispatch(fetchBranches());
    }
  }, [dispatch, branches.length]);

  const handleSubmit = (updatedBranch) => {
    dispatch(updateBranch({ id, branchData: updatedBranch }));
    navigate("/branches");
  };

  if (!branch) return <p>Loading...</p>;

  return <BranchForm initialData={branch} onSubmit={handleSubmit} isEdit />;
};

export default EditBranchForm;
