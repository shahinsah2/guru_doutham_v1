// src/components/Header.js
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Determine if the current route matches specific sections
  const isInventoryActive = location.pathname.startsWith("/inventory");
  const isProcurementActive = location.pathname.startsWith("/procurement");
  const isCRMActive = location.pathname.startsWith("/crm");
  const isOperationsActive = location.pathname.startsWith("/operation");

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-6">
          Guru Goutam Infotech Pvt. Ltd.
        </h1>
        <nav className="flex gap-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-black"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/inventory/products"
            className={
              isInventoryActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-black"
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to="/procurement/purchase-orders"
            className={
              isProcurementActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-black"
            }
          >
            Procurement
          </NavLink>
          <NavLink
            to="/crm/contacts"
            className={
              isCRMActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-black"
            }
          >
            CRM
          </NavLink>
          <NavLink
            to="/operation/challans"
            className={
              isOperationsActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-black"
            }
          >
            Operations
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="https://play-lh.googleusercontent.com/xDI28QeNJmbhidmXewIis1mJc_0ot67_WzCV9S0LUenxfakVbLdMEFs9elh2lbdqhyLG"
            alt="Guru Goutam Infotech Pvt. Ltd."
            className="w-10 h-10 mr-3"
          />
        </Link>
        
        <Link to='/profile-access'>
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </Link>
        <span className="mr-4"> Ajay Kumar</span>
      </div>
    </header>
  );
};

export default Header;
