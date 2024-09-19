import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactTypeForm = ({ initialData = {}, onSubmit, isEdit = false }) => {
  const [typeCode, setTypeCode] = useState(initialData.contact_type_code || "");
  const [typeName, setTypeName] = useState(initialData.contact_type || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [isActive, setIsActive] = useState(initialData.status === "active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactTypeData = {
      contact_type_code: typeCode,
      contact_type: typeName,
      description,
      status: isActive ? "active" : "inactive",
    };
    onSubmit(contactTypeData);
  };

  useEffect(() => {
    if (isEdit && initialData) {
      setTypeCode(initialData.contact_type_code || "");
      setTypeName(initialData.contact_type || "");
      setDescription(initialData.description || "");
      setIsActive(initialData.status === "active");
    }
  }, [initialData, isEdit]);

  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:underline">
            Masters
          </Link>
          <span>/</span>
          <Link to="/" className="hover:underline">
            Users
          </Link>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            {/* Contact Type Card */}
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="font-semibold mb-4">
                {isEdit ? "Edit Contact Type" : "Create Contact Type"}:
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-5">
                  <div>
                    <label className="block font-small mb-1">
                      Contacts Type Code*
                    </label>
                    <input
                      type="text"
                      placeholder="05"
                      className="border border-gray-300 p-2 rounded w-full"
                      value={typeCode}
                      onChange={(e) => setTypeCode(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-small mb-1">Type*</label>
                    <input
                      type="text"
                      placeholder="Enter Type"
                      className="border border-gray-300 p-2 rounded w-full"
                      value={typeName}
                      onChange={(e) => setTypeName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Description*</label>
                  <textarea
                    placeholder="Enter Description"
                    className="border border-gray-300 p-2 rounded w-full"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Control Card */}
            <div className="bg-white p-6 rounded w-1/2 flex-grow flex-shrink max-w-xs h-full">
              <h2 className="font-semibold mb-4">Control:</h2>
              <div className="flex items-center">
                <label className="mr-2">Active Status*</label>
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 w-[428px]"
            >
              {isEdit ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTypeForm;
