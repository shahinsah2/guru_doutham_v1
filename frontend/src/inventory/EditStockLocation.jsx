import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchStockLocations,
  updateStockLocation,
} from "../redux/slices/stockLocationSlice";
import StockLocationForm from "./StockLocationForm";

const EditStockLocation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.stockLocations);
  const location = locations.find((loc) => loc._id === id);

  const handleSubmit = (updatedLocation) => {
    dispatch(updateStockLocation({ id, updatedData: updatedLocation }));
  };

  useEffect(() => {
    if (!location) {
      dispatch(fetchStockLocations());
    }
  }, [dispatch, location]);

  return location ? (
    <StockLocationForm initialData={location} onSubmit={handleSubmit} isEdit />
  ) : (
    <p>Loading...</p>
  );
};

export default EditStockLocation;
