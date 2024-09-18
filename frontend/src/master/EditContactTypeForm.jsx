// src/pages/EditContactTypeForm.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateContactType,
  fetchContactTypes,
} from "../redux/slices/contactTypeSlice";
import { useParams, useNavigate } from "react-router-dom";
import ContactTypeForm from "./ContactTypeForm";

const EditContactTypeForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactTypes } = useSelector((state) => state.contactTypes);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (!contactTypes.length) {
      dispatch(fetchContactTypes());
    } else {
      const currentContactType = contactTypes.find((type) => type._id === id);
      setInitialData(currentContactType);
    }
  }, [contactTypes, dispatch, id]);

  const handleSubmit = (updatedContactType) => {
    dispatch(updateContactType({ id, updatedContactType }));
    navigate("/contact-types");
  };

  return (
    <>
      {initialData ? (
        <ContactTypeForm
          initialData={initialData}
          onSubmit={handleSubmit}
          isEdit
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default EditContactTypeForm;
