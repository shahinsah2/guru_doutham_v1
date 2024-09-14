import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Toolbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate for route changes

  const multipleRoute = ["/address", "/address/state", "/address/city"];
  const multipleRouteProduct = [
    "/inventory/products",
    "/inventory/products/brand",
    "/inventory/products/assembled",
    "/inventory/products/monitor",
  ];

  const multipleCRMRoute = ["/crm/contacts"];

  // Generate breadcrumbs dynamically
  const breadcrumbs = location.pathname
    .split("/")
    .filter((path) => path) // Filter out empty segments
    .map((path, index, array) => {
      const to = `/${array.slice(0, index + 1).join("/")}`; // Construct path up to this segment
      const isLast = index === array.length - 1; // Check if this is the last segment
      return (
        <React.Fragment key={to}>
          <Link to={to} className="hover:underline">
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
          {!isLast && <span>/</span>} {/* Add separator unless it's the last item */}
        </React.Fragment>
      );
    });

  return (
    <div className="p-4 bg-gray-100 flex justify-between items-center">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-600">
        {breadcrumbs}
      </div>
      
      {/* Dropdown for choosing Country, State, and City */}
      {multipleRoute.includes(location.pathname) && (
        <div className="relative">
          <select
            className="border border-gray-300 rounded py-1 px-3 bg-white"
            value={location.pathname} // Set the value based on the current route
            onChange={(e) => {
              const path = e.target.value;
              if (path) {
                navigate(path); // Use navigate to change routes without refreshing
              }
            }}
          >
            <option value="/address">Country</option>
            <option value="/address/state">State</option>
            <option value="/address/city">City</option>
          </select>
        </div>
      )}
      
      {/* Dropdown for choosing System type*/}
      {multipleRouteProduct.includes(location.pathname) && (
        <div className="relative">
          <select
            className="border border-gray-300 rounded py-1 px-3 bg-white"
            value={location.pathname} // Set the value based on the current route
            onChange={(e) => {
              const path = e.target.value;
              if (path) {
                navigate(path); // Use navigate to change routes without refreshing
              }
            }}
          >
            <option value="/inventory/products">Laptop</option>
            <option value="/inventory/products/brand">Branded Systems</option>
            <option value="/inventory/products/assembled">Assembled</option>
            <option value="/inventory/products/monitor">Monitors</option>
          </select>
        </div>
      )}
      
      {/* CRM Routes */}
      {multipleCRMRoute.includes(location.pathname) && (
        <div className="relative">
          <select
            className="border border-gray-300 rounded py-1 px-3 bg-white"
            value={location.pathname} // Set the value based on the current route
            onChange={(e) => {
              const path = e.target.value;
              if (path) {
                navigate(path); // Use navigate to change routes without refreshing
              }
            }}
          >
            <option value="/crm/contacts">Laptop</option>
            <option value="/crm/contacts/brand">Branded Systems</option>
            <option value="/crm/contacts/assembled">Assembled</option>
            <option value="/crm/contacts/monitor">Monitors</option>
          </select>
        </div>
      )}
      
      {/* Search and Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded py-1 px-3"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </button>
        </div>

        {/* Action Checkboxes */}
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            Delete
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            Activate
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            Deactivate
          </label>
        </div>

        {/* Add Button Based on Current Route */}
        {location.pathname === "/" && (
          <Link to="/addmaster">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add User
            </button>
          </Link>
        )}
        {location.pathname === "/roles" && (
          <Link to="/roles/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Role
            </button>
          </Link>
        )}
        {location.pathname === "/inventory/products" && (
          <Link to="/inventory/product/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Products
            </button>
          </Link>
        )}
        {multipleRoute.includes(location.pathname) && (
          <Link to="/address/city/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Address
            </button>
          </Link>
        )}
        {location.pathname === "/branches" && (
          <Link to="/branch/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Branches
            </button>
          </Link>
        )}
        {location.pathname === "/contacts" && (
          <Link to="/contacts/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Contacts Type
            </button>
          </Link>
        )}
        {location.pathname === "/tax-list" && (
          <Link to="/tax-list/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Tax list
            </button>
          </Link>
        )}
        {location.pathname === "/inventory/group" && (
          <Link to="/inventory/group/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Group
            </button>
          </Link>
        )}
        {location.pathname === "/inventory/brands" && (
          <Link to="/inventory/brands/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Brands
            </button>
          </Link>
        )}
        {location.pathname === "/inventory/product-categories" && (
          <Link to="/inventory/product-categories/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Product Categories
            </button>
          </Link>
        )}
        {location.pathname === "/inventory/stock-locations" && (
          <Link to="/inventory/stock-locations/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Stock Locations
            </button>
          </Link>
        )}
        {location.pathname === "/procurement/purchase-orders" && (
          <Link to="/procurement/purchase-orders/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Purchase Orders
            </button>
          </Link>
        )}
        {location.pathname === "/procurement/suppliers" && (
          <Link to="/procurement/suppliers/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Suppliers
            </button>
          </Link>
        )}
        {location.pathname === "/crm/contacts" && (
          <Link to="/crm/contacts/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Contacts
            </button>
          </Link>
        )}
        {location.pathname === "/crm/leads" && (
          <Link to="/crm/leads/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add Lead
            </button>
          </Link>
        )}
        {location.pathname === "/crm/orders" && (
          <Link to="/crm/orders/add">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Create Orders
            </button>
          </Link>
        )}
        {location.pathname === "/crm/quotations" && (
          <Link to="/crm/quotations/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Create Quotations
            </button>
          </Link>
        )}
        {/* Add more route-specific buttons as needed */}
      </div>
    </div>
  );
};

export default Toolbar;
