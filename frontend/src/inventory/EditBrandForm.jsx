// src/pages/EditBrandForm.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBrands, updateBrand } from "../redux/slices/brandSlice";
import BrandForm from "./BrandForm";
// import BrandForm from "../components/BrandForm";

const EditBrandForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { brands } = useSelector((state) => state.brands);
  const initialData = brands.find((brand) => brand._id === id);

  useEffect(() => {
    if (!initialData) {
      dispatch(fetchBrands());
    }
  }, [dispatch, initialData]);

  const handleSubmit = (updatedBrand) => {
    dispatch(updateBrand({ _id: id, ...updatedBrand }));
    navigate(-1); // Navigate back to brand list
  };

  return <BrandForm initialData={initialData} onSubmit={handleSubmit} isEdit />;
};

export default EditBrandForm;
