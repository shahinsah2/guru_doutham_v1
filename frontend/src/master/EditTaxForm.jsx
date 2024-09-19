import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editTax, fetchTaxes } from "../redux/slices/taxSlice";

const EditTaxForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the tax ID from the URL

  const taxes = useSelector((state) => state.taxes);
  const [taxData, setTaxData] = useState({
    tax_code: "",
    tax_name: "",
    percentage: "",
    status: "",
  });

  // Find the tax with the matching ID from the Redux store
  const currentTax = taxes?.taxes.find((tax) => tax._id === id);

  // If we don't have taxes yet, fetch them
  useEffect(() => {
    if (!currentTax) {
      dispatch(fetchTaxes());
    }
  }, [dispatch, currentTax]);

  // Populate form data once we have the current tax
  useEffect(() => {
    if (currentTax) {
      setTaxData({
        tax_code: currentTax.tax_code,
        tax_name: currentTax.tax_name,
        percentage: currentTax.percentage,
        status: currentTax.status,
      });
    }
  }, [currentTax]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaxData({
      ...taxData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTax({ id, updatedTax: taxData }));
    navigate('/tax-list'); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <div className="mb-4">
        <label>Tax Code</label>
        <input
          type="text"
          name="tax_code"
          value={taxData.tax_code}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label>Tax Name</label>
        <input
          type="text"
          name="tax_name"
          value={taxData.tax_name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label>Percentage</label>
        <input
          type="number"
          name="percentage"
          value={taxData.percentage}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label>Status</label>
        <select
          name="status"
          value={taxData.status}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Update Tax
      </button>
    </form>
  );
};

export default EditTaxForm;
