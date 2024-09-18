// src/pages/AddBrandForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { createBrand } from "../redux/slices/brandSlice";
import { useNavigate } from "react-router-dom";
import BrandForm from "./BrandForm";

const AddBrandForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newBrand) => {
    dispatch(createBrand(newBrand));
    navigate(-1); // Navigate back to brand list after creation
  };

  return (
    <BrandForm
      onSubmit={handleSubmit}
      isEdit={false} 
    />
  );
};

export default AddBrandForm;
