import React from "react";
import { useDispatch } from "react-redux";
import { createStockLocation } from "../redux/slices/stockLocationSlice";
import { useNavigate } from "react-router-dom";
import StockLocationForm from "./StockLocationForm";

const AddStockLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newLocation) => {
    dispatch(createStockLocation(newLocation));
    navigate(-1);
  };

  return <StockLocationForm onSubmit={handleSubmit} />;
};

export default AddStockLocation;

