import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTax } from "../redux/slices/taxSlice";
import { useNavigate } from "react-router-dom";

const AddTaxForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [taxData, setTaxData] = useState({
    tax_code: "",
    tax_name: "",
    percentage: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaxData({
      ...taxData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTax(taxData));
    navigate('/tax-list')
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
        Add Tax
      </button>
    </form>
  );
};

export default AddTaxForm;
