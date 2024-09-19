// src/pages/AddContactTypeForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { createContactType } from "../redux/slices/contactTypeSlice";
import { useNavigate } from "react-router-dom";
import ContactTypeForm from "../components/ContactTypeForm";

const AddContactTypeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newContactType) => {
    dispatch(createContactType(newContactType));
    navigate(-1);
  };

  return <ContactTypeForm onSubmit={handleSubmit} />;
};

export default AddContactTypeForm;
