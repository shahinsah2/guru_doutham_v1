import React, { useState, useEffect } from "react";

const BranchForm = ({ initialData = {}, onSubmit, isEdit = false }) => {
  const [name, setName] = useState(initialData.name || "");
  const [location, setLocation] = useState(initialData.location || "");
  const [status, setStatus] = useState(initialData.status === "active" || true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchData = {
      name,
      location,
      status: status ? "active" : "inactive",
    };
    onSubmit(branchData);
  };

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setLocation(initialData.location || "");
      setStatus(initialData.status === "active");
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Branch Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="checkbox"
          checked={status}
          onChange={() => setStatus(!status)}
        />
      </div>
      <button type="submit">{isEdit ? "Update" : "Save"}</button>
    </form>
  );
};

export default BranchForm;
