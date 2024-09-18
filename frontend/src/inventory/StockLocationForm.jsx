import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const StockLocationForm = ({ initialData = {}, onSubmit, isEdit = false }) => {
  // Set initial values from props or defaults
  const [locationCode, setLocationCode] = useState(initialData.location_code || "");
  const [locationName, setLocationName] = useState(initialData.location_name || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [pincode, setPincode] = useState(initialData.pincode || "");
  const [country, setCountry] = useState(initialData.country || "");
  const [state, setState] = useState(initialData.state || "");
  const [city, setCity] = useState(initialData.city || "");
  const [landmark, setLandmark] = useState(initialData.landmark || "");
  const [status, setStatus] = useState(initialData.status || "active");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = {
      location_code: locationCode,
      location_name: locationName,
      address,
      pincode,
      country,
      state,
      city,
      landmark,
      status,
    };
    onSubmit(locationData); // Call the passed onSubmit function
  };

  // If editing, update the fields with the initial data
  useEffect(() => {
    if (isEdit && initialData) {
      setLocationCode(initialData.location_code || "");
      setLocationName(initialData.location_name || "");
      setAddress(initialData.address || "");
      setPincode(initialData.pincode || "");
      setCountry(initialData.country || "");
      setState(initialData.state || "");
      setCity(initialData.city || "");
      setLandmark(initialData.landmark || "");
      setStatus(initialData.status || "active");
    }
  }, [initialData, isEdit]);

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded w-full max-w-lg">
            <h2 className="font-semibold mb-4">
              {isEdit ? "Edit Stock Location" : "Create Stock Location"}:
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Location Code*</label>
                <input
                  type="text"
                  placeholder="Enter Location Code"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={locationCode}
                  onChange={(e) => setLocationCode(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Location Name*</label>
                <input
                  type="text"
                  placeholder="Enter Location Name"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Address*</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Pincode*</label>
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Country*</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">State*</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">City*</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Landmark*</label>
                <input
                  type="text"
                  placeholder="Enter Landmark"
                  className="border border-gray-300 p-2 rounded w-full"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                   
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Status*</label>
                <select
                  className="border border-gray-300 p-2 rounded w-full"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
           
           <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                onClick={()=>navigate(-1)}
              >
                {isEdit ? "Update" : "Save"}
              </button>
          
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StockLocationForm;
