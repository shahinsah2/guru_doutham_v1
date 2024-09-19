// src/components/BrandForm.js
import React, { useState, useEffect } from "react";

const BrandForm = ({ initialData = {}, onSubmit, isEdit = false }) => {
  // Properly initialize state with default values if initialData is empty
  const [brandCode, setBrandCode] = useState(initialData.brand_code || "");
  const [brandName, setBrandName] = useState(initialData.brand_name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [status, setStatus] = useState(
    initialData.status === "active" ? true : false
  );

  // Ensure state is updated with initialData when it changes (only for edit)
  useEffect(() => {
    if (isEdit && initialData) {
      setBrandCode(initialData.brand_code || "");
      setBrandName(initialData.brand_name || "");
      setDescription(initialData.description || "");
      setStatus(initialData.status === "active" ? true : false);
    }
  }, [initialData, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const brandData = {
      brand_code: brandCode,
      brand_name: brandName,
      description,
      status: status ? "active" : "inactive",
    };
    onSubmit(brandData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="font-semibold mb-4">
                {isEdit ? "Edit Brand" : "Create Brand"}:
              </h2>
              <div className="flex flex-col gap-4">
                {/* Brand Code */}
                <div>
                  <label className="block font-medium mb-1">Brand Code*</label>
                  <input
                    type="text"
                    placeholder="Enter Brand Code"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={brandCode}
                    onChange={(e) => setBrandCode(e.target.value)} // Update state
                    required
                  />
                </div>

                {/* Brand Name */}
                <div>
                  <label className="block font-medium mb-1">Brand Name*</label>
                  <input
                    type="text"
                    placeholder="Enter Brand Name"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)} // Update state
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block font-medium mb-1">Description*</label>
                  <textarea
                    placeholder="Enter Description"
                    className="border border-gray-300 p-2 rounded w-full"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // Update state
                    required
                  />
                </div>

                {/* Status Checkbox */}
                <div className="flex items-center">
                  <label className="mr-2">Active Status*</label>
                  <input
                    type="checkbox"
                    checked={status}
                    onChange={() => setStatus(!status)} // Toggle status
                    className="toggle-checkbox"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  {isEdit ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BrandForm;
