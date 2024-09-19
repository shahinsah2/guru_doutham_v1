import React, { useState, useEffect } from "react";

const RoleForm = ({ initialData = null, onSubmit, isEdit = false }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [status, setStatus] = useState(initialData?.status === "active" || true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleData = {
      name,
      description,
      status: status ? "active" : "inactive",
    };
    onSubmit(roleData); // Pass form data back to parent component
  };

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setStatus(initialData.status === "active");
    } else {
      // Reset form fields for adding a new role
      setName("");
      setDescription("");
      setStatus(true);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex gap-3">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="font-semibold mb-4">
                {isEdit ? "Edit Role" : "Create Role"}:
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-medium mb-1">Role Name*</label>
                  <input
                    type="text"
                    placeholder="Enter Role Name"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
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
                <div className="flex items-center">
                  <label className="mr-2">Active Status*</label>
                  <input
                    type="checkbox"
                    checked={status}
                    onChange={() => setStatus(!status)}
                    className="toggle-checkbox"
                  />
                </div>
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

export default RoleForm;
